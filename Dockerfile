FROM node:14-alpine

WORKDIR /home/node/app

COPY ./package.json .

RUN yarn

COPY . .

CMD ["yarn", "start"]