FROM node:alpine

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#COPY . /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g

CMD npm start