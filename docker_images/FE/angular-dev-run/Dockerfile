FROM node:24

WORKDIR /myWorkDir

RUN npm install -g @angular/cli

RUN apt-get update

RUN apt-get install -y xdg-utils

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000", "--verbose", "true"]