##STAGE 1
#FROM node:12.7-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
#EXPOSE 4200
#
#CMD ["npm", "run", "start"]



FROM mhart/alpine-node:14 AS build
RUN mkdir -p /app
WORKDIR /app
#COPY package.json /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app

RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "start"]



#FROM node:alpine AS my-app-build
#WORKDIR /app
#COPY . .
#RUN npm ci && npm run build
#
## stage 2
#
#FROM nginx:alpine
#COPY --from=my-app-build /app/dist/app-to-run-inside-docker /usr/share/nginx/html
#EXPOSE 4200







#FROM node:11.4.0-alpine as builder
##RUN apk update && apk add --no-cache make git
#RUN mkdir /app
#WORKDIR /app
#
##COPY package.json package-lock.json Makefile /app/
##COPY angular-app/package.json angular-app/package-lock.json /app/angular-app/
#
#RUN npm install --prefix angular-app
#RUN npm run build
#
##RUN npm run build --prefix angular-app -- --output-path=./dist/out
#
##RUN cd /app && npm set progress=false && npm install
##
#COPY . /app
##
##RUN cd /app && npm run build
##
##FROM nginx:alpine
##
##RUN rm -rf /usr/share/nginx/html/*
##
##COPY --from=builder /app/dist /usr/share/nginx/html
#EXPOSE 4200
##CMD ["nginx", "-g", "daemon off;"]
#CMD ["npm", "run", "start"]





##FROM node:10-alpine as build-step
#FROM mhart/alpine-node:14
#RUN mkdir -p /app
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#
#RUN npm run build
#
#EXPOSE 4200
#
#CMD ["npm", "run", "start"]
