FROM node:20-alpine

WORKDIR /backend

RUN npm i -g pnpm 

COPY package.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json .
COPY src ./src

RUN pnpm i

EXPOSE 4000

RUN pnpm run build

CMD ["pnpm", "run", "start:prod"]
