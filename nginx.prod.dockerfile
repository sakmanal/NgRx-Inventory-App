# Take advantage of the multistage build pattern to create a temporary image used for building the artifact
# – the production-ready Angular static files – that is then copied over to the production image.
# The temporary build image is discarded along with the original files, folders,
# and dependencies associated with the image. This produces a lean, production-ready image.

##### Stage 1 (build the App)
FROM node:lts as node
LABEL author="Thanos Manalikadis"
WORKDIR /app
# copy package json files into the working dir
# Docker images are built in layers.
# Docker compares the contents and instructions that would make up the each new layer to previous builds.
# If they match the SHA256 checksum for the existing layer, the build step for that layer can be skipped.
# So the separation of the first 2 COPY commands is a Docker caching trick to speed up builds.
# It is done this way so the project dependencies don't need to be installed every time a code change is made.

# To make building our Docker image even more efficient we can add to the project’s root additional file called .dockerignore .
# This one works similar to .gitignore and in it we can define what files and folders we want to Docker to ignore.
# In our case we don’t want to copy any files from node_modules (and dist folders), because they’re not needed in compilation.
COPY package.json package-lock.json ./
RUN npm install
# copying all remaining files, recursively into the container for the build (also skips files already there)
COPY . .
# run the bulid process
RUN npm run build -- --prod

##### Stage 2 (copy Code and create the server)
FROM nginx:alpine
VOLUME /var/cache/nginx
# copy the build folder into nginx's folder
COPY --from=node /app/dist/ngrxInventoryManagement /usr/share/nginx/html
# copy our config file
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t ngrx-inventory-app:prod -f nginx.prod.dockerfile .
# docker run -d -p 8080:80 ngrx-inventory-app:prod
