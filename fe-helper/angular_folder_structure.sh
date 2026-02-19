#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/"

echo 'path - '"${SCRIPT_DIR}"

mkdir -p "${SCRIPT_DIR}"src/app/components/auxiliary
mkdir -p "${SCRIPT_DIR}"src/app/components/main

mkdir -p "${SCRIPT_DIR}"src/app/services

mkdir -p "${SCRIPT_DIR}"src/app/helpers
mkdir -p "${SCRIPT_DIR}"src/app/models

mkdir -p "${SCRIPT_DIR}"src/assets/audio
mkdir -p "${SCRIPT_DIR}"src/assets/i18n
mkdir -p "${SCRIPT_DIR}"src/assets/images
mkdir -p "${SCRIPT_DIR}"src/assets/videos
mkdir -p "${SCRIPT_DIR}"src/locale

mkdir -p "${SCRIPT_DIR}"src/environments

tree "${SCRIPT_DIR}"src
pwd