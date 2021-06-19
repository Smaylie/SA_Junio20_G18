#Primera parte-----------------------------------
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


#Segunda parte-----------------------------------
FROM nginx:alpine
COPY --from=node /app/dist/book-sa /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]