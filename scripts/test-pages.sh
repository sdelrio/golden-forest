#!/bin/bash
# Test changed pages via lightpanda CDP + Playwright
# Validates each page loads (HTTP 200) with no JS console errors.
#
# Usage: ./scripts/test-pages.sh <file1.md> [file2.mdx] ...
#   Files are relative to repo root (e.g. docs/Tools/lightpanda.md)

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

LP_PORT=9222
DEV_PORT=3000
LP_STARTED=false
DEV_STARTED=false
LP_PID=""
DEV_PID=""

cleanup() {
  if [ "$LP_STARTED" = true ] && [ -n "$LP_PID" ]; then
    echo -e "${YELLOW}Stopping lightpanda (PID $LP_PID)...${NC}"
    kill "$LP_PID" 2>/dev/null || true
  fi
  if [ "$DEV_STARTED" = true ] && [ -n "$DEV_PID" ]; then
    echo -e "${YELLOW}Stopping dev server (PID $DEV_PID)...${NC}"
    kill "$DEV_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

# --- Resolve slug override from frontmatter ---
resolve_slug() {
  local file="$1"
  local slug
  slug=$(sed -n '/^---$/,/^---$/p' "$file" | grep -E '^slug:' | head -1 | sed 's/^slug:[[:space:]]*//' | tr -d '"' | tr -d "'")
  echo "$slug"
}

# --- Map MDX file path to localhost URL ---
file_to_url() {
  local file="$1"
  local slug
  slug=$(resolve_slug "$file")

  if [ -n "$slug" ]; then
    # slug override: /docs/{slug}/  or /tutorial/{slug}/
    local base="docs"
    case "$file" in
      tutorial/*) base="tutorial" ;;
    esac
    echo "/${base}/${slug}/"
    return
  fi

  # Default: strip directory prefix, extension, handle index files
  local rel
  case "$file" in
    docs/*)    rel="${file#docs/}" ;;
    tutorial/*) rel="${file#tutorial/}" ;;
    blog/*)    rel="${file#blog/}" ;;
    *)         rel="$file" ;;
  esac

  # Strip extension
  rel="${rel%.md}"
  rel="${rel%.mdx}"

  # Handle index files
  case "$rel" in
    */index) rel="${rel%/index}" ;;
  esac

  # Determine route base
  local base="docs"
  case "$file" in
    tutorial/*) base="tutorial" ;;
    blog/*)     base="blog" ;;
  esac

  echo "/${base}/${rel}/"
}

# --- Ensure lightpanda is running ---
if ! lsof -i :"$LP_PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo -e "${BLUE}Starting lightpanda on port $LP_PORT...${NC}"
  lightpanda serve --host 127.0.0.1 --port "$LP_PORT" >/dev/null 2>&1 &
  LP_PID=$!
  LP_STARTED=true
  sleep 1
  if ! kill -0 "$LP_PID" 2>/dev/null; then
    echo -e "${RED}Failed to start lightpanda${NC}"
    exit 1
  fi
  echo -e "${GREEN}Lightpanda started (PID $LP_PID)${NC}"
else
  echo -e "${GREEN}Lightpanda already running on port $LP_PORT${NC}"
fi

# --- Ensure dev server is running ---
if ! lsof -i :"$DEV_PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo -e "${BLUE}Starting dev server on port $DEV_PORT...${NC}"
  npx docusaurus start --port "$DEV_PORT" >/dev/null 2>&1 &
  DEV_PID=$!
  DEV_STARTED=true
  # Wait for dev server to be ready
  echo -n "Waiting for dev server"
  for i in $(seq 1 30); do
    if curl -s -o /dev/null -w '' "http://localhost:$DEV_PORT/" 2>/dev/null; then
      echo ""
      echo -e "${GREEN}Dev server ready${NC}"
      break
    fi
    if [ "$i" -eq 30 ]; then
      echo ""
      echo -e "${RED}Dev server failed to start within 60s${NC}"
      exit 1
    fi
    echo -n "."
    sleep 2
  done
else
  echo -e "${GREEN}Dev server already running on port $DEV_PORT${NC}"
fi

# --- Build URL list from file arguments ---
if [ $# -eq 0 ]; then
  echo -e "${YELLOW}No files to test.${NC}"
  exit 0
fi

URLS=()
for f in "$@"; do
  if [ ! -f "$f" ]; then
    echo -e "${YELLOW}Skipping missing file: $f${NC}"
    continue
  fi
  url=$(file_to_url "$f")
  echo -e "  ${BLUE}$f${NC} -> ${url}"
  URLS+=("$url")
done

if [ ${#URLS[@]} -eq 0 ]; then
  echo -e "${YELLOW}No valid URLs to test.${NC}"
  exit 0
fi

# --- Run Playwright tests via Node.js ---
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
mkdir -p "$REPO_ROOT/tmp"
TEST_SCRIPT=$(mktemp "$REPO_ROOT/tmp/test-pages-XXXXX.cjs")
cat > "$TEST_SCRIPT" << 'NODESCRIPT'
const { chromium } = require('playwright');

const PORT = parseInt(process.env.DEV_PORT || '3000');
const LP_PORT = parseInt(process.env.LP_PORT || '9222');
const urls = process.argv.slice(2);

if (urls.length === 0) {
  console.log('No URLs to test.');
  process.exit(0);
}

(async () => {
  let browser;
  try {
    browser = await chromium.connectOverCDP(`http://127.0.0.1:${LP_PORT}`);
  } catch (e) {
    console.error(`Failed to connect to lightpanda on port ${LP_PORT}: ${e.message}`);
    process.exit(1);
  }

  const context = browser.contexts()[0] || await browser.newContext();
  let failures = 0;

  for (const url of urls) {
    const fullUrl = `http://localhost:${PORT}${url}`;
    console.log(`Testing: ${fullUrl}`);

    const page = await context.newPage();
    const errors = [];

    page.on('pageerror', (err) => {
      errors.push(err.message);
    });

    try {
      const response = await page.goto(fullUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });

      const status = response?.status() || 0;
      if (status !== 200) {
        console.error(`  FAIL: HTTP ${status}`);
        failures++;
      } else if (errors.length > 0) {
        console.error(`  FAIL: ${errors.length} JS error(s):`);
        errors.forEach((e) => console.error(`    - ${e}`));
        failures++;
      } else {
        console.log(`  PASS (HTTP 200, no errors)`);
      }
    } catch (e) {
      console.error(`  FAIL: ${e.message}`);
      failures++;
    }

    await page.close();
  }

  await browser.close();

  if (failures > 0) {
    console.error(`\n${failures} page(s) failed.`);
    process.exit(1);
  } else {
    console.log(`\nAll ${urls.length} page(s) passed.`);
  }
})();
NODESCRIPT

echo ""
echo -e "${BLUE}Running Playwright tests against lightpanda...${NC}"
NODE_PATH="${REPO_ROOT}/node_modules" DEV_PORT=$DEV_PORT LP_PORT=$LP_PORT node "$TEST_SCRIPT" "${URLS[@]}"
TEST_EXIT=$?

rm -f "$TEST_SCRIPT"

if [ "$TEST_EXIT" -ne 0 ]; then
  echo -e "${RED}Page tests failed.${NC}"
  exit 1
fi

echo -e "${GREEN}All page tests passed.${NC}"
