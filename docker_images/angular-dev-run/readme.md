---create docker image

docker build -t angular-dev-run:node24 .

docker images | grep -e 'angular-dev-run' -e'node24'

REPOSITORY               TAG       IMAGE ID       CREATED         SIZE                                        
angular-dev-run          node24    f9a35b870d8d   6 seconds ago   1.48GB



docker run --rm -it -p 4211:4200 -v ~/projects/github/PRIVATE/jdevd-utils/docker/images/demo/demo-app:/myWorkDir angular-dev-run:node22 serve --host 0.0.0.0 --poll 1000