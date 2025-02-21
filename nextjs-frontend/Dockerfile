FROM node:20-alpine

WORKDIR /frontend

RUN npm i -g pnpm

COPY package.json .
COPY pnpm-lock.yaml .
COPY /app ./app
COPY next.config.ts .
COPY postcss.config.mjs .
COPY /public ./public
COPY tsconfig.json .
COPY tailwind.config.ts .

RUN pnpm i

EXPOSE 3000

RUN pnpm run build

CMD ["pnpm", "run", "start"]

