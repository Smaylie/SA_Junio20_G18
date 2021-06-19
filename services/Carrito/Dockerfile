FROM node:latest
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3010
ENTRYPOINT ["npm", "start"]