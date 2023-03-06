# from base image node
FROM node:18-slim as base

WORKDIR /Project_TypeScript

# copying all the files from your file system to container file system
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src

# install all dependencies
RUN npm install

# Bundle app source
COPY ./src .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build