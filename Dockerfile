FROM node:22-alpine

RUN apk update
RUN apk add openjdk21-jre

WORKDIR /usr/local

COPY public/ /usr/local/public
COPY src/ /usr/local/src
COPY package.json /usr/local/
COPY mocks /usr/local/mocks

RUN npm install

CMD ["npm", "start"]