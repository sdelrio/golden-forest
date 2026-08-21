#!/usr/bin/env bash
# ai-dashboard-common.sh - Shared setup for AI Dashboard scripts
#
# Source this file at the top of each ai-dashboard-*.sh script:
#   SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
#   source "$SCRIPT_DIR/ai-dashboard-common.sh"

if ! command -v jq &>/dev/null; then
  echo "Error: jq is required but not installed." >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TOOLS_FILE="${TOOLS_FILE:-$REPO_ROOT/static/ai-dashboard/tools.json}"
SCHEMA_FILE="$REPO_ROOT/static/ai-dashboard/tools-schema.json"

mkdir -p "$REPO_ROOT/tmp"
