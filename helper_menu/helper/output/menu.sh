#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/"

# generate date time - %s
# -z string - True if the string length is zero.
# -n string - True if the string length is non-zero.

#########
# 1 - main COMMAND_NUMBER
# 2 - npm install param - lib name(11) or force npm install(10) or npm audit(13) or (17) lib name
#     (101) - for ng add new lib
#     (20) - for arguments
#     (6) - for arguments localizations
#########

NODE_VERSION_FOR_DOCKER_IMAGE=node24a
NODE_VERSION_FOR_DOCKER_IMAGE_FULL=node24
PORT=%s


create_angular_component(){
  NAME=''

if [ -z "$1" ]; then
    read -rp "Write your COMPONENT name, please: " NAME
else
    NAME=$1
fi


COMPONENT_TYPE=
while true; do # Loop indefinitely until explicitly broken
    echo '1 - main component'
    echo '2 - auxiliary component'

    read -rp "Choose component type, please: " NUMBER

    case "${NUMBER}" in
        1) COMPONENT_TYPE='main'
        ;;
        2) COMPONENT_TYPE='auxiliary'
        ;;
        *) echo "Invalid choice. Please enter a number between 1 and 2." 
        ;;
    esac

    if [ -z "$COMPONENT_TYPE" ]; then
        echo "Please repeat!"
    else
        break
    fi
done

# echo path to creation - /$COMPONENT_TYPE/$NAME

docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
 generate component components/$COMPONENT_TYPE/$NAME --standalone=false --skip-tests=true --type=component && \
sudo chown -vR $(whoami) "${SCRIPT_DIR}"src
}

create_angular_service(){
  NAME=''

if [ -z "$1" ]; then
    read -rp "Write your SERVICE name, please: " NAME
else
    NAME=$1
fi

docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
 generate service services/$NAME --skip-tests=true --type=service && \
sudo chown -vR $(whoami) "${SCRIPT_DIR}"src
}

#-----------------------------
if [ -z "$1" ]; then
  echo '1 - Run application'
  echo '2 - Create angular component'
  echo '3 - Create angular service'
  echo '4 - Create angular environments'
  echo '5 - Create angular folder structure'
  echo '6 - Extract angular translations'

  echo '--------------------------------------------------------'
  
  echo '10 - Npm install(param force)'
  echo '101 - Angular add lib'
  echo '11 - Npm install by param (param lib name)'
  echo '111 - Npm install(--legacy-peer-deps)'
  echo '12 - Npm audit'
  echo '13 - Npm audit fix (param force)'
  echo '14 - Npm fund'
  echo '15 - Clean node modules and cache'
  echo '16 - Npm list installed packages'
  echo '17 - Npm update by param (param lib name)'
  echo '18 - Npm check for outdated packages'
  echo '19 - Angular build'
  echo '20 - Angular build with localize'

  read -rp "Enter your command number: " COMMAND_NUMBER
else
  echo 'Run with param...'
  COMMAND_NUMBER=$1
fi

echo '||||||||||||||||||||||||||||||||||||||||||||||'
echo "Number of arguments: $#"

# The "$@" preserves spaces in individual arguments
args=("$@")

for ((i=0; i<$#; i++)); do
    echo "Param $((i+1)): ${args[$i]}"
done
echo '||||||||||||||||||||||||||||||||||||||||||||||'

#-----------------------------

case "${COMMAND_NUMBER}" in
    "1")
        echo "run project on - http://localhost:${PORT}/"
        docker run --rm -it -p ${PORT}:4200 -v \
        "${SCRIPT_DIR}":/myWorkDir angular-dev-run:${NODE_VERSION_FOR_DOCKER_IMAGE_FULL}
    ;;
    "2")
        create_angular_component
    ;;
    "3")
        create_angular_service
    ;;
    "4")
        docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
         generate environments && \
        sudo chown -vR $(whoami) "${SCRIPT_DIR}"src
    ;;
    "5")
        sh node_modules/jdev_helpers/angular_folder_structure.sh
    ;;
    "6")
        docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
                 extract-i18n ${2}
    ;;

    "10")
        IS_FORCE=
        if [ -z "$2" ]; then
          IS_FORCE=
        else
          IS_FORCE=--force
        fi
        
        docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE_FULL} \
        install $IS_FORCE
    ;;
    "101")
        LIB_NAME=
        if [ -z "$2" ]; then
          read -rp "Write please lib name: " LIB_NAME
        else
          LIB_NAME=$2
        fi
        docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
               add ${LIB_NAME}
    ;;
    "11")
      LIB_NAME=
      if [ -z "$2" ]; then
        read -rp "Write please lib name: " LIB_NAME
      else
        LIB_NAME=$2
      fi
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE_FULL} \
            install ${LIB_NAME} --legacy-peer-deps
    ;;
    "111")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE_FULL} \
      install --legacy-peer-deps
    ;;
    "12")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE} audit
    ;;
    "13")
      IS_FORCE=
      if [ -z "$2" ]; then
        IS_FORCE=
      else
        IS_FORCE=--force
      fi
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE} \
      audit fix $IS_FORCE
    ;;
    "14")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE} \
      fund
    ;;
    "15")
      rm -rfv node_modules/
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE} \
      cache clean --force
      rm -fv "${SCRIPT_DIR}"package-lock.json
    ;;
    "16")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util-npm:${NODE_VERSION_FOR_DOCKER_IMAGE} ls
    ;;
    "17")
      LIB_NAME=
      if [ -z "$2" ]; then
        LIB_NAME=
      else
        LIB_NAME=$2
      fi
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util:${NODE_VERSION_FOR_DOCKER_IMAGE_FULL} \
      update $LIB_NAME
    ;;
    "18")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir nodejs-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
      outdated
    ;;
    "19")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
             build
    ;;
    "20")
      docker run --rm -it -v "${SCRIPT_DIR}":/myWorkDir angular-util:${NODE_VERSION_FOR_DOCKER_IMAGE} \
             build --localize $2
    ;;
    "e"|"E") exit
    ;;
    "c"|"C") clear
    ;;
    *) bash -e "${BASH_SOURCE[0]}"
    ;;
esac