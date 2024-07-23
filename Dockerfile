FROM node:slim

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN npm install

CMD [ "node", "index.js" ]

EXPOSE 3001
