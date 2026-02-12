# https://docs.docker.com/reference/dockerfile/
# https://hub.docker.com/_/amazoncorretto
FROM amazoncorretto:17.0.18-al2023-headless

WORKDIR /myWorkDir

ENV JAR_FILE_NAME="execution.jar"
ENV PORT=5789

EXPOSE ${PORT}

ENTRYPOINT ["sh", "-c", "java -jar ${JAR_FILE_NAME}"]