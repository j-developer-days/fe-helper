# My functions




docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 run build
npm adduser
npm whoami
npm publish

////////////
cd /datahdd/development/codes2025/github/jdd/fe-helper/ && \
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 run build && \
npm adduser && \
npm publish
////////////////



------------
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 init -y

docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 install typescript --save-dev

docker run -it -v $(pwd):/myWorkDir nodejs-util-npx:node22 tsc --init

docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 install rollup @rollup/plugin-typescript @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-json --save-dev



-----
https://rollupjs.org/command-line-interface/#command-line-flags




---------------------OPTION 2
---https://www.youtube.com/watch?v=xnfdm-s8adI

docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 init -y
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 install typescript
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 install -D typescript tsup
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22_npm11.5.1 run build


cd /datahdd/development/codes2025/github/jdd/fe-helper/ && \
docker run -it -v $(pwd):/myWorkDir nodejs-util:node22 install @angular/core@^19.0.0 @angular/common@^19.0.0 --save-dev