FROM node:8.9.1-stretch

RUN mkdir /app
WORKDIR /app

EXPOSE 3000
CMD ["node", "server.js" ]
HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1

# Install node, leaving as few artifacts as possible
#RUN apt-get update && apt-get install apt-transport-https && \
#    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
#    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
#    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
#    apt-get update && \
#    apt-get install -y -o Dpkg::Options::="--force-confold" --no-install-recommends yarn nodejs && \
#    apt-get clean && \
#    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/log/dpkg.log

COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

# Add code and compile assets
COPY . .
RUN node ./node_modules/gulp/bin/gulp generate-assets
