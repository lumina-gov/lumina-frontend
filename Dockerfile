FROM node:16-alpine

WORKDIR /frontend

# we only want to pre-install the dependencies before copying all the code, so that code changes don't require npm i each time we start the container
COPY package.json package.json
RUN npm i
# RUN npm i -g esbuild-linux-64

COPY . .

RUN npm run build

EXPOSE 80

CMD if [ "$MODE" == "development" ]; then npm run dev ; else npm run prod ; fi