# FROM: install the image of the Node.js version.
FROM node:16.16.0

# WORKDIR: path of the working directory.
WORKDIR /server

# COPY: copy package.json file to the container, then the second one copies all the files inside the project directory.
COPY package.json /package.json

# RUN: run the command yarn add to install all the dependencies.
RUN yarn 

# COPY: copy all the files inside the project directory to the container.
COPY . /server

# EXPOSE: expose the port on which the app will be running (8080 is the default that `serve` uses).
EXPOSE 8080

# CMD: run script npm start after the image is built.
CMD ["yarn", "start"]