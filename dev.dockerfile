FROM node:lts
LABEL author="Thanos Manalikadis"
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli && npm install
COPY . .
EXPOSE 4200 49153
CMD ["npm", "run", "dev"]


# docker build -t ngrx-inventory-app:dev -f dev.dockerfile .
# docker run -it -p 4200:4200 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules --rm ngrx-inventory-app:dev
