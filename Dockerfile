#stage -1 
FROM node:18-apline as builder
WORKDIR /app
COPY package.json .
COPY package.lock.json .
RUN npm install
COPY . .
RUN npm build

#stage -2
FROM nginx:1.19.0
WORKDIR /user/shared/nginx/html
RUN rm -rf ./*
COPY --from=builder app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]