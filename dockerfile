FROM node:latest
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5400
# CMD [ "node","index.js" ]
CMD [ "npm", "run","dev" ]