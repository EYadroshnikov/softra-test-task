# Base image
FROM --platform=linux/amd64 node:22
# FROM node:20
LABEL authors="Egor Yadroshnikov"

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

RUN rm -rf ./src

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
