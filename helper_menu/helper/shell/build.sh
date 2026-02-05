#!/bin/bash

clear && mvn --file ../pom.xml -U com.github.ekryd.sortpom:sortpom-maven-plugin:2.15.0:sort
find ../. -name '*pom.xml.bak' -delete

mvn --file ../pom.xml -U clean install
ls -la ../target

cd ../output
cp ../target/helper-for-ui.jar ./
ls -la

jar -fvt ./helper-for-ui.jar
#jar -uf ./helper-for-ui.jar ../menu.sh
echo '--------------------------'
#jar -fvt ./helper-for-ui.jar

# how to use!
#java -jar ./helper-for-ui.jar ../settings.properties