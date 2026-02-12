---create docker image

docker build -t angular-util:node24a .

docker image ls | grep -e 'angular-util' -e'node24a'

REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
angular-util      node24a   8bd431ecddb5   6 hours ago     339MB





---https://angular.dev/cli
docker run -it -v ~/projects/github/PRIVATE/jdevd-utils/docker/images/demo/demo-app:/myWorkDir angular-util:node22 build
docker run -it -v ~/projects/github/PRIVATE/jdevd-utils/docker/images/demo/demo-app:/myWorkDir angular-util:node22 update