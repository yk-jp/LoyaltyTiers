# This is for development.

FROM node:16

WORKDIR /app

# make sure to consider cache here
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]