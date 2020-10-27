FROM node:latest
LABEL author="jiantong.liu"
COPY . /work
WORKDIR /work
RUN npm config set registry http://registry.npm.taobao.org \
    npm install nest \
    npm install
EXPOSE 4000
ENTRYPOINT ["sh", "scripts/prod.sh"]