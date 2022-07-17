FROM node:16 AS build
WORKDIR /usr/src/app
COPY --chown=node:node . .
ENV REACT_APP_BACKEND_URL http://localhost:8080/api/
RUN npm ci
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html