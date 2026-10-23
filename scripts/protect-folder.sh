#!/usr/bin/env bash
# Encrypts every readable page in _src/<FOLDER>/ into <FOLDER>/ with that folder's
# salt (see FOLDERS in protect-page.mjs), so one "Remember me" unlocks the folder.
#
# Usage (Git Bash, from the repo root):
#   read -rs STATICRYPT_PASSWORD && export STATICRYPT_PASSWORD && bash scripts/protect-folder.sh <FOLDER>
set -euo pipefail
: "${1:?Usage: bash scripts/protect-folder.sh <FOLDER>}"
: "${STATICRYPT_PASSWORD:?Set STATICRYPT_PASSWORD first}"
for f in "_src/$1"/*.html; do
  node scripts/protect-page.mjs "$f"
done
