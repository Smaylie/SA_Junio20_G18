FROM node:latest
WORKDIR /src
COPY . .
RUN npm i nodemon -g
RUN npm install
EXPOSE 3600
ENTRYPOINT ["nodemon", "index.js"]