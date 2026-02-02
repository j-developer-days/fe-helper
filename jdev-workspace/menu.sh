#!/bin/bash

docker run --rm -it -v $(pwd):/myWorkDir nodejs-util:node22 install
docker run --rm -it -v $(pwd):/myWorkDir angular-util:node22 build jdev-angular-lib
cd dist/jdev-angular-lib
npm login
npm publish --access public
cd ../..
pwd