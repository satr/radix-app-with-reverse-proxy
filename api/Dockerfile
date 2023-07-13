FROM node:alpine

WORKDIR /app

COPY . .
RUN npm install express

USER 1001
EXPOSE 8081
CMD ["node", "server.js"]
