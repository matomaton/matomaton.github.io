#!/usr/bin/env bash
# Encrypts every readable prototype in _src/PROTO/ into PROTO/ with the shared
# salt, so one "Remember me" unlocks the whole folder (including the index).
#
# Usage (Git Bash, from the repo root):
#   read -rs STATICRYPT_PASSWORD && export STATICRYPT_PASSWORD && bash scripts/protect-proto.sh
exec bash "$(dirname "$0")/protect-folder.sh" PROTO
