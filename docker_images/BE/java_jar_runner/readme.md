---create docker image

docker image rm -f java-jar-runner:17
docker build --debug -t java-jar-runner:17 .

docker images | grep -e 'java-jar-runner' -e'17'

REPOSITORY               TAG                        IMAGE ID       CREATED          SIZE
java-jar-runner           17                         5b593804b1e9   37 seconds ago   375MB


docker inspect java-jar-runner:17


docker run --rm -it -e JAR_FILE_NAME=password-en-de-coder.jar -e PORT=19975 -p 19975:19975 -v /datahdd/development/codes2025/github/jdd/jdevd-utils/website/jd19/password-coding/be/password-en-de-coder/target/password-en-de-coder.jar:/myWorkDir/password-en-de-coder.jar java-jar-runner:17


--------------
docker image rm -f java-jar-runner:17
docker build --debug -t java-jar-runner:17 .
docker run --rm -it -e JAR_FILE_NAME=password-en-de-coder.jar \
-e PORT=19975 -p 19975:19975 \
-v /datahdd/development/codes2025/github/jdd/jdevd-utils/website/jd19/password-coding/be/password-en-de-coder/target/password-en-de-coder.jar:/myWorkDir/password-en-de-coder.jar \
java-jar-runner:17
