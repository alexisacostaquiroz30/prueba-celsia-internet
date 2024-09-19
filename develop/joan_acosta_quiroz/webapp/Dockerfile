FROM node:18-alpine

WORKDIR /app

COPY celsia_internet_front/package.json celsia_internet_front/package-lock.json ./

RUN npm install

COPY celsia_internet_front .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
