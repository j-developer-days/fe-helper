docker image ls
docker image ls --all

docker image rm 38b7440a8d30 740e0c26e42a
--force delete45
docker image rm -f 38b7440a8d30 740e0c26e42a


docker container ls


-----------------------------------------------
-----------------------------------------------
tree of docker image utils:
    nodejs:node24a - util for run node js commands(alpine)(entrypoint-node)
        nodejs-util-npx:node24a - util for run node js(npm) commands NPX(alpine)(entrypoint-npx)
        (nodejs-util folder)nodejs-util-npm:node24a - util for run node js(npm) commands(alpine)(entrypoint-npm)
            angular-util:node24a - util for run angular commands(alpine)(entrypoint-ng)
                angular-create-project:node24a - util for creating angular projects(alpine)(entrypoint-ng new --standalone=false --routing=true)
    (nodejs-util folder)nodejs-util-npm:node24 - util for run node js(npm) commands(entrypoint-npm)
    angular-dev-run:node24 - util for run angular project as dev env(entrypoint-ng serve --host=0.0.0.0 --poll=1000)
-----------------------------------------------
-----------------------------------------------


useful links:
--docker file
    https://docs.docker.com/reference/dockerfile/#format

--docker hub
    https://hub.docker.com/_/node

--angular cli
    https://angular.dev/cli

--angular create new project
    https://angular.dev/tools/cli/setup-local

--node js version
    https://nodejs.org/en/about/previous-releases

--npm cli
    https://docs.npmjs.com/cli/v7/commands

--npx cli
    https://docs.npmjs.com/cli/v8/commands/npx
