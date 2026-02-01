---create docker image

docker build -t nodejs-util-npx:node24a .

docker image ls | grep -E 'nodejs-util-npx|node24a'
docker image ls | grep -e 'nodejs-util-npx' -e'node24a'

REPOSITORY               TAG       IMAGE ID       CREATED         SIZE
nodejs-util-npx          node24a   268f221f4d41   9 hours ago     202MB



---https://docs.npmjs.com/cli/v8/commands/npx
docker run -it -v ~/projects/github/PRIVATE/jdevd-utils/docker/images/demo/demo-app:/myWorkDir nodejs-util-npx:node22 tsc --init