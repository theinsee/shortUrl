FROM node:alpine
RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
COPY ./backend/package.json /usr/src/app/backend

RUN npm i
COPY ./backend /usr/src/app/backend
EXPOSE 8000
CMD ["node", './server.js']