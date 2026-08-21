#!/usr/bin/env bash
# ai-dashboard-validate.sh - Validate tools.json structure
#
# Usage:
#   ./scripts/ai-dashboard-validate.sh
#
# Checks:
#   1. Valid JSON syntax
#   2. All required fields present (id, name, description, category, docPath)
#   3. Unique ids
#   4. Valid category values
#   5. id format (lowercase, hyphens)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/ai-dashboard-common.sh"

ERRORS=0

# 1. Valid JSON
if ! jq empty "$TOOLS_FILE" 2>/dev/null; then
  echo "FAIL: $TOOLS_FILE is not valid JSON" >&2
  exit 1
fi
echo "PASS: Valid JSON"

# 2. Required fields
MISSING=$(jq -r '
  to_entries[] | .value as $t |
  ["id","name","description","category","docPath"] |
  map(select($t[.] == null or $t[.] == "")) |
  if length > 0 then "\(.value.id // "entry #\(.key + 1)"): missing \(. | join(", "))" else empty end
' "$TOOLS_FILE")

if [[ -n "$MISSING" ]]; then
  echo "FAIL: Missing required fields:" >&2
  echo "$MISSING" >&2
  ERRORS=$((ERRORS + 1))
else
  echo "PASS: All entries have required fields"
fi

# 3. Unique ids
DUPES=$(jq -r '[.[].id] | group_by(.) | map(select(length > 1 | not) | .[0]) as $unique | [.[].id] | group_by(.) | map(select(length > 1)) | map(.[0]) | .[]' "$TOOLS_FILE" 2>/dev/null || true)
# Simpler approach
DUPES=$(jq -r '[.[].id] | group_by(.) | map(select(length > 1)) | flatten | .[]' "$TOOLS_FILE" 2>/dev/null)

if [[ -n "$DUPES" ]]; then
  echo "FAIL: Duplicate ids: $DUPES" >&2
  ERRORS=$((ERRORS + 1))
else
  echo "PASS: All ids are unique"
fi

# 4. Valid categories
VALID_CATS="agents|skills|tools|workflows|prompts|comparatives|models|mcp|browsers|proxy"
BAD_CATS=$(jq -r ".[] | select(.category | test(\"^($VALID_CATS)$\") | not) | \"\(.id): \(.category)\"" "$TOOLS_FILE" 2>/dev/null)

if [[ -n "$BAD_CATS" ]]; then
  echo "FAIL: Invalid categories:" >&2
  echo "$BAD_CATS" >&2
  ERRORS=$((ERRORS + 1))
else
  echo "PASS: All categories are valid"
fi

# 5. id format
BAD_IDS=$(jq -r '.[] | select(.id | test("^[a-z0-9][a-z0-9\\-]*$") | not) | "\(.id): invalid format"' "$TOOLS_FILE" 2>/dev/null)

if [[ -n "$BAD_IDS" ]]; then
  echo "FAIL: Invalid id formats:" >&2
  echo "$BAD_IDS" >&2
  ERRORS=$((ERRORS + 1))
else
  echo "PASS: All ids match format"
fi

echo ""
if [[ $ERRORS -gt 0 ]]; then
  echo "RESULT: $ERRORS check(s) failed"
  exit 1
else
  echo "RESULT: All checks passed ($(jq length "$TOOLS_FILE") entries)"
fi
