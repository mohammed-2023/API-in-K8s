FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
EXPOSE 5050:5050
CMD ["npm", "start"]
