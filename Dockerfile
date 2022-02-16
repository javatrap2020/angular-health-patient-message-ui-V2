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
