FROM node:20-slim

WORKDIR /opt/app

COPY package*.json ./
RUN npm install --production

COPY . .

# 👇 apply permissions (safe)
RUN chmod -R 755 /opt/app

RUN npm run build

ENV NODE_ENV=production

EXPOSE 1337

CMD ["npm", "run", "start"]