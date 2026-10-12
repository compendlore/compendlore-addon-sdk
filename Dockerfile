# syntax=docker/dockerfile:1.7

FROM node:24.13.1-bookworm-slim AS quality

ENV CI=true
WORKDIR /home/node/workspace
COPY --chown=node:node . .
RUN chown node:node /home/node/workspace
USER node
RUN npm ci
RUN npm run ci

CMD ["npm", "run", "ci"]
