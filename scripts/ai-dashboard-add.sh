#!/usr/bin/env bash
# ai-dashboard-add.sh - Add a new tool entry to tools.json
#
# Usage:
#   ./scripts/ai-dashboard-add.sh <json-object>
#   echo '{"id":"my-tool","name":"My Tool",...}' | ./scripts/ai-dashboard-add.sh -
#
# The JSON object must contain at least: id, name, description, category, docPath.
# See static/ai-dashboard/tools-schema.json for the full schema.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/ai-dashboard-common.sh"

if [[ $# -eq 0 ]]; then
  echo "Usage: $0 <json-object>" >&2
  echo "       echo '{...}' | $0 -" >&2
  exit 1
fi

# Read input
if [[ "$1" == "-" ]]; then
  INPUT=$(cat)
else
  INPUT="$1"
fi

# Validate required fields
ID=$(echo "$INPUT" | jq -r '.id // empty')
NAME=$(echo "$INPUT" | jq -r '.name // empty')
DESC=$(echo "$INPUT" | jq -r '.description // empty')
CATEGORY=$(echo "$INPUT" | jq -r '.category // empty')
DOCPATH=$(echo "$INPUT" | jq -r '.docPath // empty')

missing=()
[[ -z "$ID" ]] && missing+=("id")
[[ -z "$NAME" ]] && missing+=("name")
[[ -z "$DESC" ]] && missing+=("description")
[[ -z "$CATEGORY" ]] && missing+=("category")
[[ -z "$DOCPATH" ]] && missing+=("docPath")

if [[ ${#missing[@]} -gt 0 ]]; then
  echo "Error: missing required fields: ${missing[*]}" >&2
  exit 1
fi

# Validate id format
if ! echo "$ID" | grep -qE '^[a-z0-9][a-z0-9\-]*$'; then
  echo "Error: id must be lowercase alphanumeric with hyphens (got: $ID)" >&2
  exit 1
fi

# Validate category
VALID_CATEGORIES="agents skills tools workflows prompts comparative models mcp browsers proxy"
if ! echo "$VALID_CATEGORIES" | grep -qw "$CATEGORY"; then
  echo "Error: invalid category '$CATEGORY'. Valid: $VALID_CATEGORIES" >&2
  exit 1
fi

# Check for duplicate id
if jq -e ".[] | select(.id == \"$ID\")" "$TOOLS_FILE" &>/dev/null; then
  echo "Error: tool with id '$ID' already exists. Use update.sh instead." >&2
  exit 1
fi

# Merge defaults with input, then insert sorted by id
TMPFILE="$REPO_ROOT/tmp/tools-$(date +%s).json"
jq --argjson new "$INPUT" '
  . + [$new] | sort_by(.id)
' "$TOOLS_FILE" > "$TMPFILE" && mv "$TMPFILE" "$TOOLS_FILE"

echo "Added '$NAME' ($ID) to tools.json"
