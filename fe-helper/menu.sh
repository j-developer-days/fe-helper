#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/"
PREVIOUS_PATH=$(pwd)
echo 'prev path - '${PREVIOUS_PATH}

rm -rfv "${SCRIPT_DIR}"node_modules/
docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:node24a \
    cache clean --force
rm -fv "${SCRIPT_DIR}"package-lock.json


docker run -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:node24a install
docker run -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:node24a run build
cd "${SCRIPT_DIR}"
npm login
npm publish --access public
cd "${PREVIOUS_PATH}"