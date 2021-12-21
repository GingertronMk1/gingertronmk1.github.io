FROM node:16-alpine

WORKDIR /src

COPY . .

RUN npm install && npm run dev