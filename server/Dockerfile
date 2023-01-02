FROM node:16.16.0

WORKDIR /server

COPY package.json /package.json

RUN yarn 

COPY . /server

EXPOSE 8080

CMD ["yarn", "start"]