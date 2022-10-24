FROM node:16

WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM caddy:2

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=0 /app/build /srv
