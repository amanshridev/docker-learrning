FROM node:22

WORKDIR /vijay-rath

COPY . /vijay-rath/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
