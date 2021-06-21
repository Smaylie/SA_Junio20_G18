FROM node:latest
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3015
ENTRYPOINT ["node", "index.js"]