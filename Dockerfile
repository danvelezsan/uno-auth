FROM node:16-alpine
COPY . .
EXPOSE 3002
CMD [ "npm", "start" ]