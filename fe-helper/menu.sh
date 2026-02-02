#!/bin/bash

docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 install
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 run build
npm login
npm publish