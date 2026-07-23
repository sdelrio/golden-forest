#!/bin/bash
# PR Workflow Script
# Automates: branch creation, commits, PR creation, checks, and merge
#
# Usage: ./scripts/pr-workflow.sh [options]
#   --enrich     Update AI dashboard before creating PR
#   --no-check   Skip MDX validation check
#   --branch     Specify branch name (default: auto-generated)
#   --title      PR title (manual mode - skips auto-generation)
#   --body       PR body/description (used with --title)
#   --dry-run    Show generated commits without committing

set -e

# Help message
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
  echo "Usage: ./scripts/pr-workflow.sh [options]"
  echo ""
  echo "Options:"
  echo "  --enrich     Update AI dashboard before creating PR"
  echo "  --no-check   Skip MDX validation check"
  echo "  --branch     Specify branch name (default: auto-generated)"
  echo "  --title      PR title (manual mode - skips auto-generation)"
  echo "  --body       PR body/description (used with --title)"
  echo "  --dry-run    Show generated commits without committing"
  echo "  -h, --help   Show this help message"
  echo ""
  echo "Examples:"
  echo "  # Auto-generate commits from changes"
  echo "  ./scripts/pr-workflow.sh"
  echo ""
  echo "  # Manual mode with explicit title"
  echo "  ./scripts/pr-workflow.sh --title \"feat(prompt-library): add new article\""
  echo ""
  echo "  # Auto-generate with dashboard enrichment"
  echo "  ./scripts/pr-workflow.sh --enrich"
  echo ""
  echo "  # Preview auto-generated commits"
  echo "  ./scripts/pr-workflow.sh --dry-run"
  exit 0
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Default values
ENRICH=false
SKIP_CHECK=false
DRY_RUN=false
BRANCH_NAME=""
PR_TITLE=""
PR_BODY=""

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --enrich)
      ENRICH=true
      shift
      ;;
    --no-check)
      SKIP_CHECK=true
      shift
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --branch)
      BRANCH_NAME="$2"
      shift 2
      ;;
    --title)
      PR_TITLE="$2"
      shift 2
      ;;
    --body)
      PR_BODY="$2"
      shift 2
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      exit 1
      ;;
  esac
done

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

# Detect commit type based on file path
detect_commit_type() {
  local file="$1"
  local type="chore"

  # Check file patterns to determine type
  case "$file" in
    docs/*|blog/*|tutorial/*)
      type="docs"
      ;;
    src/*|static/*)
      type="feat"
      ;;
    scripts/*)
      type="chore"
      ;;
    package.json|Taskfile.yml|Makefile)
      type="chore"
      ;;
  esac

  echo "$type"
}

# Detect scope based on file path
detect_scope() {
  local file="$1"
  local scope=""

  # Map paths to scopes
  case "$file" in
    docs/Develop-Code/AI-Development/Prompt-Library/*)
      scope="prompt-library"
      ;;
    docs/Develop-Code/AI-Development/Tools/*)
      scope="tools"
      ;;
    docs/Develop-Code/AI-Development/MCPs/*)
      scope="mcps"
      ;;
    docs/Develop-Code/AI-Development/Workflows/*)
      scope="workflows"
      ;;
    docs/Develop-Code/AI-Development/*)
      scope="ai-development"
      ;;
    docs/Develop-Code/*)
      scope="develop-code"
      ;;
    docs/Games/DnD/*)
      scope="dnd"
      ;;
    docs/Games/*)
      scope="games"
      ;;
    docs/Homelab/*)
      scope="homelab"
      ;;
    docs/Productivity/*)
      scope="productivity"
      ;;
    docs/Security/*)
      scope="security"
      ;;
    src/components/*)
      # Extract component name from path
      local component=$(echo "$file" | sed -n 's|^src/components/\([^/]*\).*|\1|p')
      scope="components:${component,,}"
      ;;
    src/theme/*)
      scope="theme"
      ;;
    static/ai-dashboard/*)
      scope="ai-dashboard"
      ;;
    static/fg/chars/*)
      scope="chars"
      ;;
    static/*)
      scope="static"
      ;;
    scripts/*)
      scope="scripts"
      ;;
    blog/*)
      # Extract category from path
      local category=$(echo "$file" | sed -n 's|^blog/\([^/]*\).*|\1|p')
      if [ -n "$category" ]; then
        scope="blog:${category}"
      else
        scope="blog"
      fi
      ;;
    tutorial/*)
      scope="tutorial"
      ;;
    *.md|*.mdx)
      # Markdown files in root or unknown directories
      scope="docs"
      ;;
    *.json|*.yml|*.yaml)
      # Config files in root
      scope="config"
      ;;
    *)
      # Use top-level folder as fallback, but only if it's a directory
      local top_folder=$(echo "$file" | cut -d'/' -f1)
      if [ -d "$top_folder" ]; then
        scope="$top_folder"
      else
        # File is in root directory
        scope="root"
      fi
      ;;
  esac

  echo "$scope"
}

# Generate subject line from changes
generate_subject() {
  local type="$1"
  local scope="$2"
  local files="$3"

  local subject=""

  # Count file statuses
  local added=$(echo "$files" | grep -c "^A" || true)
  local modified=$(echo "$files" | grep -c "^M" || true)
  local deleted=$(echo "$files" | grep -c "^D" || true)

  # Generate description based on changes
  if [ "$added" -gt 0 ]; then
    # Get first added file name (skip status and tab)
    local first_added=$(echo "$files" | grep "^A" | head -1 | cut -f2)
    local filename=$(basename "$first_added" .md)
    filename=$(basename "$filename" .mdx)

    # Convert filename to human-readable
    local description=$(echo "$filename" | sed 's/-/ /g' | sed 's/_/ /g')

    if [ "$added" -eq 1 ]; then
      subject="add $description"
    else
      subject="add $description and $((added - 1)) more"
    fi
  elif [ "$modified" -gt 0 ]; then
    local first_modified=$(echo "$files" | grep "^M" | head -1 | cut -f2)
    local filename=$(basename "$first_modified" .md)
    filename=$(basename "$filename" .mdx)

    local description=$(echo "$filename" | sed 's/-/ /g' | sed 's/_/ /g')

    if [ "$modified" -eq 1 ]; then
      subject="update $description"
    else
      subject="update $description and $((modified - 1)) more"
    fi
  elif [ "$deleted" -gt 0 ]; then
    local first_deleted=$(echo "$files" | grep "^D" | head -1 | cut -f2)
    local filename=$(basename "$first_deleted" .md)
    filename=$(basename "$filename" .mdx)

    local description=$(echo "$filename" | sed 's/-/ /g' | sed 's/_/ /g')

    if [ "$deleted" -eq 1 ]; then
      subject="remove $description"
    else
      subject="remove $description and $((deleted - 1)) more"
    fi
  fi

  # Format with type and scope
  if [ -n "$scope" ]; then
    echo "${type}(${scope}): ${subject}"
  else
    echo "${type}: ${subject}"
  fi
}

# Generate body from changes
generate_body() {
  local files="$1"
  local body=""

  while IFS= read -r line; do
    local status=$(echo "$line" | cut -f1)
    local file=$(echo "$line" | cut -f2)

    local filename=$(basename "$file")
    local description=""

    case "$status" in
      A)
        description="Add $filename"
        ;;
      M)
        description="Update $filename"
        ;;
      D)
        description="Remove $filename"
        ;;
      R*)
        # Rename: extract new name
        local new_name=$(echo "$line" | sed 's/^R[0-9]*\t[^\t]*\t//')
        description="Rename $(basename "$file") to $(basename "$new_name")"
        ;;
      C*)
        # Copy
        description="Copy $filename"
        ;;
      *)
        description="Modify $filename"
        ;;
    esac

    if [ -n "$description" ]; then
      body="${body}- ${description}\n"
    fi
  done <<< "$files"

  echo -e "$body"
}

# Generate full commit message
generate_commit_message() {
  local files="$1"

  local type=$(detect_commit_type "$(echo "$files" | head -1 | cut -f2)")
  local scope=$(detect_scope "$(echo "$files" | head -1 | cut -f2)")
  local subject=$(generate_subject "$type" "$scope" "$files")
  local body=$(generate_body "$files")

  echo "${subject}

${body}"
}

# ============================================================================
# MAIN EXECUTION
# ============================================================================

# Check if there are changes to commit
if ! git diff --quiet HEAD 2>/dev/null || ! git diff --cached --quiet HEAD 2>/dev/null || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  # Get staged and unstaged changes with proper formatting
  # Use a simpler approach: just get all changes in a consistent format
  ALL_CHANGES=$(git status --porcelain 2>/dev/null || true)

  if [ -z "$ALL_CHANGES" ]; then
    echo -e "${YELLOW}No changes to commit.${NC}"
    exit 0
  fi

  # Convert to a consistent format: status\tfile
  FORMATTED_CHANGES=""
  while IFS= read -r line; do
    # Extract status (first two characters) and file
    file_status=$(echo "$line" | cut -c1-2 | tr -d ' ')
    file_path=$(echo "$line" | cut -c4-)

    # Normalize status
    case "$file_status" in
      "M "| " M"|"MM") file_status="M" ;;
      "A "|" A"|"AM") file_status="A" ;;
      "D "|" D"|"DM") file_status="D" ;;
      "R "|" R"|"RM") file_status="R" ;;
      "C "|" C"|"CM") file_status="C" ;;
      "??") file_status="A" ;;
      *) file_status="M" ;;
    esac

    FORMATTED_CHANGES="${FORMATTED_CHANGES}${file_status}	${file_path}
"
  done <<< "$ALL_CHANGES"

  # Remove empty lines
  ALL_CHANGES=$(echo "$FORMATTED_CHANGES" | grep -v '^$' || true)

  if [ -z "$ALL_CHANGES" ]; then
    echo -e "${YELLOW}No changes to commit.${NC}"
    exit 0
  fi
else
  echo -e "${YELLOW}No changes to commit.${NC}"
  exit 0
fi

# Manual mode: use provided title
if [ -n "$PR_TITLE" ]; then
  echo -e "${BLUE}=== PR Workflow (Manual Mode) ===${NC}"
  echo -e "Branch: ${YELLOW}$BRANCH_NAME${NC}"
  echo -e "Title: ${YELLOW}$PR_TITLE${NC}"
  echo ""

  # Step 1: Enrich dashboard (optional)
  if [ "$ENRICH" = true ]; then
    echo -e "${BLUE}Step 1: Enriching AI dashboard...${NC}"
    task ai-dashboard:enrich
    echo -e "${GREEN}✓ Dashboard enriched${NC}"
  else
    echo -e "${YELLOW}Step 1: Skipping dashboard enrichment${NC}"
  fi

  # Step 2: Check MDX (optional)
  if [ "$SKIP_CHECK" = false ]; then
    echo -e "${BLUE}Step 2: Running MDX validation...${NC}"
    task check
    echo -e "${GREEN}✓ MDX validation passed${NC}"
  else
    echo -e "${YELLOW}Step 2: Skipping MDX validation${NC}"
  fi

  # Step 3: Create branch
  echo -e "${BLUE}Step 3: Creating branch...${NC}"
  git checkout -b "$BRANCH_NAME"
  echo -e "${GREEN}✓ Branch created${NC}"

  # Step 4: Stage and commit changes
  echo -e "${BLUE}Step 4: Committing changes...${NC}"
  git add -A
  git commit -m "$PR_TITLE

$PR_BODY"
  echo -e "${GREEN}✓ Changes committed${NC}"

  # Step 5: Push branch
  echo -e "${BLUE}Step 5: Pushing branch...${NC}"
  git push -u origin "$BRANCH_NAME"
  echo -e "${GREEN}✓ Branch pushed${NC}"

  # Step 6: Create PR
  echo -e "${BLUE}Step 6: Creating PR...${NC}"
  PR_URL=$(gh pr create --title "$PR_TITLE" --body "$PR_BODY")
  echo -e "${GREEN}✓ PR created: $PR_URL${NC}"

# Auto-generate mode: detect changes and create commits
else
  echo -e "${BLUE}=== PR Workflow (Auto-Generate Mode) ===${NC}"
  echo ""

  # Create temp directory for grouping
  TMPDIR=$(mktemp -d)
  trap "rm -rf $TMPDIR" EXIT

  # Group files by scope
  while IFS= read -r line; do
    file=$(echo "$line" | cut -f2)
    scope=$(detect_scope "$file")

    if [ -z "$scope" ]; then
      scope="other"
    fi

    # Create scope file if it doesn't exist
    if [ ! -f "$TMPDIR/${scope}.txt" ]; then
      echo "$scope" >> "$TMPDIR/scopes.txt"
    fi

    # Append line to scope file
    echo "$line" >> "$TMPDIR/${scope}.txt"
  done <<< "$ALL_CHANGES"

  # Process each scope
  COMMIT_COUNT=0

  while IFS= read -r scope; do
    SCOPE_FILES=$(cat "$TMPDIR/${scope}.txt" | grep -v "^${scope}$" || true)

    if [ -z "$SCOPE_FILES" ]; then
      continue
    fi

    # Generate commit message for this scope
    COMMIT_MSG=$(generate_commit_message "$SCOPE_FILES")

    # Extract subject (first line)
    SUBJECT=$(echo "$COMMIT_MSG" | head -n 1)

    echo -e "${CYAN}Commit for scope: ${scope}${NC}"
    echo -e "${YELLOW}Subject: ${SUBJECT}${NC}"
    echo -e "${BLUE}Body:${NC}"
    echo "$COMMIT_MSG" | tail -n +3
    echo ""

    if [ "$DRY_RUN" = true ]; then
      echo -e "${CYAN}[DRY RUN] Would commit with message:${NC}"
      echo "$COMMIT_MSG"
      echo ""
      COMMIT_COUNT=$((COMMIT_COUNT + 1))
    else
      # Stage files for this scope
      while IFS= read -r file_line; do
        if [[ "$file_line" != "$scope" ]]; then
          file_to_add=$(echo "$file_line" | cut -f2)
          git add "$file_to_add"
        fi
      done <<< "$SCOPE_FILES"

      # Commit
      git commit -m "$COMMIT_MSG"
      COMMIT_COUNT=$((COMMIT_COUNT + 1))
      echo -e "${GREEN}✓ Committed ${scope} changes${NC}"
      echo ""
    fi
  done < "$TMPDIR/scopes.txt"

  if [ "$DRY_RUN" = false ] && [ "$COMMIT_COUNT" -gt 0 ]; then
    # Auto-generate branch name from first commit
    if [ -z "$BRANCH_NAME" ]; then
      FIRST_COMMIT_MSG=$(git log --format="%s" -1)
      BRANCH_NAME="feat/$(echo "$FIRST_COMMIT_MSG" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//' | cut -c1-50)"
    fi

    echo -e "${BLUE}=== Creating PR ===${NC}"
    echo -e "Branch: ${YELLOW}$BRANCH_NAME${NC}"
    echo ""

    # Rename branch if needed
    CURRENT_BRANCH=$(git branch --show-current)
    if [ "$CURRENT_BRANCH" != "$BRANCH_NAME" ]; then
      git branch -m "$BRANCH_NAME"
    fi

    # Push branch
    echo -e "${BLUE}Pushing branch...${NC}"
    git push -u origin "$BRANCH_NAME"
    echo -e "${GREEN}✓ Branch pushed${NC}"

    # Create PR with combined commit messages
    PR_TITLE=$(git log --format="%s" -1)
    PR_BODY=$(git log --format="%b" --reverse | head -20)

    echo -e "${BLUE}Creating PR...${NC}"
    PR_URL=$(gh pr create --title "$PR_TITLE" --body "$PR_BODY")
    echo -e "${GREEN}✓ PR created: $PR_URL${NC}"

    # Watch for checks
    echo -e "${BLUE}Watching for checks...${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop watching${NC}"
    echo ""

    PR_NUMBER=$(echo "$PR_URL" | grep -oE '[0-9]+$')

    TIMEOUT=300
    ELAPSED=0
    while [ $ELAPSED -lt $TIMEOUT ]; do
      CHECKS=$(gh pr checks "$PR_NUMBER" 2>/dev/null || echo "")

      if echo "$CHECKS" | grep -q "All checks have passed"; then
        echo -e "${GREEN}✓ All checks passed!${NC}"
        echo ""
        echo -e "${BLUE}Ready to merge PR #${PR_NUMBER}${NC}"
        echo ""
        read -p "Merge PR now? (y/N): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
          echo -e "${BLUE}Merging PR...${NC}"
          gh pr merge "$PR_NUMBER" --squash
          echo -e "${GREEN}✓ PR merged successfully!${NC}"
        else
          echo -e "${YELLOW}Skipped merge. Run manually:${NC}"
          echo -e "${YELLOW}gh pr merge $PR_NUMBER --squash${NC}"
        fi
        exit 0
      elif echo "$CHECKS" | grep -q "Some checks were not successful"; then
        echo -e "${RED}✗ Some checks failed${NC}"
        echo ""
        echo -e "${BLUE}Failed checks:${NC}"
        gh pr checks "$PR_NUMBER" | grep -E "(fail|error)" || true
        echo ""
        echo -e "${YELLOW}Fix the issues and run this script again.${NC}"
        exit 1
      fi

      sleep 10
      ELAPSED=$((ELAPSED + 10))
      echo -n "."
    done

    echo ""
    echo -e "${YELLOW}Timeout reached. Checks may still be running.${NC}"
    echo -e "Check manually: gh pr checks $PR_NUMBER"
  elif [ "$DRY_RUN" = true ]; then
    echo -e "${CYAN}=== DRY RUN COMPLETE ===${NC}"
    echo -e "${YELLOW}${COMMIT_COUNT} commits would be created${NC}"
  else
    echo -e "${YELLOW}No changes to commit.${NC}"
  fi
fi
