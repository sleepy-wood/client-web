FROM node:16

WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile && yarn build

FROM caddy:2

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=0 /app/build /srv
