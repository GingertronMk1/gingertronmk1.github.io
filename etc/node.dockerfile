FROM node:17-alpine

WORKDIR /src

COPY . .

RUN npm install