#!/usr/bin/env bash
# ai-dashboard-update.sh - Update a field for a tool by id
#
# Usage:
#   ./scripts/ai-dashboard-update.sh <id> <field> <value>
#   ./scripts/ai-dashboard-update.sh freellmapi docPath "/docs/Develop-Code/AI-Development/Tools/freellmapi"
#   ./scripts/ai-dashboard-update.sh freellmapi tags '["llm","proxy","openai"]'
#   ./scripts/ai-dashboard-update.sh freellmapi github null

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/ai-dashboard-common.sh"

if [[ $# -lt 3 ]]; then
  echo "Usage: $0 <id> <field> <value>" >&2
  echo "  value is parsed as JSON (strings need quotes: '\"hello\"')" >&2
  echo "  set to null to remove a field" >&2
  exit 1
fi

TOOL_ID="$1"
FIELD="$2"
VALUE="$3"

# Check tool exists
if ! jq -e ".[] | select(.id == \"$TOOL_ID\")" "$TOOLS_FILE" &>/dev/null; then
  echo "Error: tool with id '$TOOL_ID' not found." >&2
  echo "Available ids:" >&2
  jq -r '.[].id' "$TOOLS_FILE" | sort >&2
  exit 1
fi

# Parse value as JSON
PARSED=$(echo "$VALUE" | jq '.' 2>/dev/null) || {
  echo "Error: invalid JSON value for field '$FIELD'" >&2
  exit 1
}

# Update the field
TMPFILE="$REPO_ROOT/tmp/tools-$(date +%s).json"
jq --arg id "$TOOL_ID" --arg field "$FIELD" --argjson val "$PARSED" '
  map(if .id == $id then .[$field] = $val else . end)
' "$TOOLS_FILE" > "$TMPFILE" && mv "$TMPFILE" "$TOOLS_FILE"

echo "Updated '$TOOL_ID': $FIELD = $VALUE"
