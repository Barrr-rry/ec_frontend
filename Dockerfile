FROM node:14.8.0
ENV LC_ALL zh_CN.utf8
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm install
RUN npm install node-sass@latest
RUN npm install sass-loader@latest
RUN npm run build
CMD ["npm", "start"]