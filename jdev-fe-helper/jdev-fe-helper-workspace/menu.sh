#!/usr/bin/env bash
clear

###################################variables
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/"
PREVIOUS_PATH=$(pwd)
echo "prev path - ${PREVIOUS_PATH} - script path - ${SCRIPT_DIR}"

###################################cleaning
#rm -rfv "${SCRIPT_DIR}"node_modules/
echo 'BEFORE---'
ls -la "${SCRIPT_DIR}"dist/
rm -rfv "${SCRIPT_DIR}"dist/*
echo 'AFTER---'
ls -la "${SCRIPT_DIR}"dist/
docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:node24a \
    cache clean --force
rm -fv "${SCRIPT_DIR}"package-lock.json
# rm -fv "${SCRIPT_DIR}"projects/js-angular-utils/package-lock.json
# rm -rfv "${SCRIPT_DIR}"projects/js-angular-utils/node_modules

###################################building
# echo 'installing...'
# docker run -it -v "${SCRIPT_DIR}"projects/js-angular-utils:/myWorkDir nodejs-util-npm:node24a install
echo 'building...'
docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:node24a build js-angular-utils 

# ###################################publishing
# pwd
# echo "${SCRIPT_DIR}dist/js-angular-utils"
cd "${SCRIPT_DIR}dist/js-angular-utils" || exit
npm login && npm publish --access public
cd "${PREVIOUS_PATH}" || exit