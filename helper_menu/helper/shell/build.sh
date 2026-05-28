#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/"

clear && mvn --file "${SCRIPT_DIR}"../pom.xml -U com.github.ekryd.sortpom:sortpom-maven-plugin:2.15.0:sort
find "${SCRIPT_DIR}"../. -name '*pom.xml.bak' -delete

mvn --file "${SCRIPT_DIR}"../pom.xml -U clean install
ls -la "${SCRIPT_DIR}"../target

cd "${SCRIPT_DIR}"../output
cp "${SCRIPT_DIR}"../target/helper-for-ui.jar ./
ls -la

jar -fvt "${SCRIPT_DIR}"helper-for-ui.jar
#jar -uf ./helper-for-ui.jar ../menu.sh
echo '--------------------------'
#jar -fvt ./helper-for-ui.jar

# how to use!
#java -jar ./helper-for-ui.jar ../settings.properties