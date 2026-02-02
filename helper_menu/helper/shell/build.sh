#!/bin/bash

mvn --file ../pom.xml -U clean install
ls -la ../target

cd ../output
cp ../target/helper-for-ui.jar ./
ls -la

jar -fvt ./helper-for-ui.jar
#jar -uf ./helper-for-ui.jar ../menu.sh
echo '--------------------------'
#jar -fvt ./helper-for-ui.jar

java -jar ./helper-for-ui.jar ../settings.properties