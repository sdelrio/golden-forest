#!/usr/bin/env bash
# ai-dashboard-list.sh - List all tools in the dashboard
#
# Usage:
#   ./scripts/ai-dashboard-list.sh              # all tools
#   ./scripts/ai-dashboard-list.sh tools        # filter by category
#   ./scripts/ai-dashboard-list.sh . freellmapi # show one entry

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/ai-dashboard-common.sh"

FILTER="${1:-}"
VALUE="${2:-}"

case "$FILTER" in
  "")
    # List all: id | name | category
    jq -r '.[] | "\(.id) | \(.name) | \(.category)"' "$TOOLS_FILE" | sort
    echo ""
    echo "$(jq length "$TOOLS_FILE") total entries"
    ;;
  tools)
    # List by category
    jq -r ".[] | select(.category == \"$VALUE\") | \"\(.id) | \(.name)\"" "$TOOLS_FILE" | sort
    ;;
  show)
    # Show full entry by id
    jq ".[] | select(.id == \"$VALUE\")" "$TOOLS_FILE"
    ;;
  ids)
    # Just ids, one per line
    jq -r '.[].id' "$TOOLS_FILE" | sort
    ;;
  count)
    # Count by category
    jq -r 'group_by(.category) | .[] | "\(.[0].category): \(length)"' "$TOOLS_FILE" | sort
    ;;
  *)
    # Treat as tool id, show its entry
    jq ".[] | select(.id == \"$FILTER\")" "$TOOLS_FILE"
    ;;
esac
