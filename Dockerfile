# how to set up a Dockerfile
# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
# how to set up docker-compose.yml
# https://dev.to/jay97/docker-compose-an-express-and-mongo-app-aai

FROM node:10
# create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# install packages
RUN npm install
# bundle app source
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]