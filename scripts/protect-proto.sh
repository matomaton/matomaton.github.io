#!/usr/bin/env bash
# Encrypts every readable prototype in _src/PROTO/ into PROTO/ with the shared
# salt, so one "Remember me" unlocks the whole folder (including the index).
#
# Usage (Git Bash, from the repo root):
#   read -rs STATICRYPT_PASSWORD && export STATICRYPT_PASSWORD && bash scripts/protect-proto.sh
set -euo pipefail
: "${STATICRYPT_PASSWORD:?Set STATICRYPT_PASSWORD first}"
for f in _src/PROTO/*.html; do
  node scripts/protect-page.mjs "$f" "This prototype" prototype
done
