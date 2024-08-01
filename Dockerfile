FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 4090
CMD [ "npm", "start" ]