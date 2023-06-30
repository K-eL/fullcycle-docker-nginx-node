FROM node:18-alpine
WORKDIR /usr/src/app

# install vim, bash and openssl
RUN apk add --no-cache vim bash openssl
# install dockerize
ENV DOCKERIZE_VERSION v0.7.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
	&& tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
	&& rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# install dependencies
COPY package*.json ./
RUN npm install