FROM node:8-alpine

RUN mkdir /app
WORKDIR /app

EXPOSE 3000
CMD ["node", "server.js" ]

RUN apk add --no-cache curl
HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1

COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

# Add code and compile assets
COPY . .
RUN node ./node_modules/gulp/bin/gulp generate-assets
