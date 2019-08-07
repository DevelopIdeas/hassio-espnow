ARG BUILD_FROM
FROM $BUILD_FROM

# Add env
ENV LANG C.UTF-8

ENV WORKINGDIR /espnow

COPY src "$WORKINGDIR"

RUN apt-get install nodejs npm \
    make gcc g++ linux-headers udev && \
  cd "/$WORKINGDIR" && \
  npm install --unsafe-perm && \  
  npm install --unsafe-perm -g pm2 && \
  npm install --unsafe-perm && \

COPY run.sh "/$WORKINGDIR/run.sh"
WORKDIR "/$WORKINGDIR"

RUN ["chmod", "a+x", "./run.sh"]
CMD [ "./run.sh" ]