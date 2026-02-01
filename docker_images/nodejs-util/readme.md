---create docker image

docker build -t nodejs-util-npm:node24a .
docker image ls | grep -e 'nodejs-util-npm' -e'node24a'

REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
nodejs-util-npm   node24a   f3ab9d4ba8ba   9 hours ago     202MB

---------------------------------------------------------------------------
---------------------------------------------------------------------------
---------------------------------------------------------------------------


---https://angular.dev/cli
docker run -it -v ~/projects/github/PRIVATE/jdevd-utils/docker/images/demo/demo-app:/myWorkDir nodejs-util:node22 install


docker build -t nodejs-util:node22_npm11.5.1 .


REPOSITORY                           TAG                        IMAGE ID       CREATED          SIZE
nodejs-util                          node22_npm11.5.1           cdf6f49cdee5   30 seconds ago   201MB


---------------------------------------------------------------------------
---------------------------------------------------------------------------
---------------------------------------------------------------------------

docker build -f ./Dockerfile-full -t nodejs-util-npm:node24 .

docker images | grep -e 'nodejs-util-npm' -e'node24'

REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
nodejs-util-npm   node24    3298921f566c   8 hours ago     1.17GB