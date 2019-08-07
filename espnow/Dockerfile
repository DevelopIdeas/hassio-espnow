ARG BUILD_FROM
FROM $BUILD_FROM

# Add env
ENV LANG C.UTF-8

ENV WORKINGDIR /espnow

COPY src "$WORKINGDIR"

#RUN apk add --no-cache install nodejs npm \
#    make gcc g++ linux-headers udev && \
#  cd "/$WORKINGDIR" && \
#  npm install --unsafe-perm -g pm2 && \
#  npm install --unsafe-perm

RUN apk add --no-cache nodejs-current yarn && \
    yarn global add npm && \
    yarn cache clean && \
    apk del yarn && \
    npm set unsafe-perm true && \
    cd "/$WORKINGDIR" && \
    npm install --unsafe-perm -g pm2 && \
    npm install --unsafe-perm

COPY run.sh "/$WORKINGDIR/run.sh"
WORKDIR "/$WORKINGDIR"

RUN ["chmod", "a+x", "./run.sh"]
CMD [ "./run.sh" ]