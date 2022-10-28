FROM public.ecr.aws/docker/library/node:16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

FROM public.ecr.aws/docker/library/caddy:2-builder

RUN xcaddy build \
    --with github.com/lindenlab/caddy-s3-proxy@v0.5.6

FROM public.ecr.aws/docker/library/caddy:2

COPY --from=1 /usr/bin/caddy /usr/bin/caddy
COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=0 /app/build /srv
