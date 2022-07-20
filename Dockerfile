FROM node:lts-alpine as build

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# ---------------

FROM node:lts-alpine

ENV NODE_ENV production
ENV API_PORT 3001

WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/next.config.js .
COPY --from=build /app/api-server.js .
COPY --from=build /app/.next ./.next
COPY --from=build /app/pages ./pages
COPY --from=build /app/public ./public

RUN npm install

EXPOSE 3000
EXPOSE 3001

CMD npm start
