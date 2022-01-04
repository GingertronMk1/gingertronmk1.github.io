FROM node:12-alpine

WORKDIR /src

COPY package*.json ./

RUN npm cache clean --force

RUN npm install

CMD ["npm", "run" "dev"]
