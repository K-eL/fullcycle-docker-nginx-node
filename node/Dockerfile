FROM node:18-alpine

# install vim, bash and openssl
RUN apk add --no-cache vim bash openssl
# install dockerize
ENV DOCKERIZE_VERSION v0.7.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
	&& tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
	&& rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER node

WORKDIR /usr/src/app

# CMD [ "tail", "-f", "/dev/null" ]