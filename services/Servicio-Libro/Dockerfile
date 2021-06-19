FROM node:latest
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 9000
ENTRYPOINT ["npm", "start"]