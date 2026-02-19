#!/bin/bash

# $1 - project name
# $2 - path where create project
# $3 - project settings

if [ $# == 0 ]; then
	echo 'Empty params!'
	echo '$1 - project name'
	echo '$2 - path where create project'
	echo '$3 - project settings'
	exit
fi

docker run -it -v $2:/myWorkDir angular-create-project:node24a $1 $3
sudo chown -vR $(whoami) $(pwd)
