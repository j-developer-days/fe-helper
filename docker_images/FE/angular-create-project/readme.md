---create docker image

docker build -t angular-create-project:node24a .

docker images | grep -e 'angular-create-project' -e'node24a'

REPOSITORY               TAG       IMAGE ID       CREATED         SIZE
angular-create-project   node24a   1a7dd49b1fd1   6 hours ago     339MB



docker run -it -v $(pwd)/demo:/myWorkDir angular-create-project:node24a demo-app
sudo chown -vR $(whoami) $(pwd)
