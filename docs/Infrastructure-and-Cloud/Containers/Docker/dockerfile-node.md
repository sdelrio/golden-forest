# Dockerfile for node.js

## node.js server

* **Base** image with `node`, `npm` and `tini` (init app).
* **Dependencies** wich contains aditional required dependencies for final image only.
* **Test** which will run linters, setup and tests (like `mocha`), if this run command fails, there wont be a production image.
* **Release** with the application code and all node modules dependencies.

```bash
#
# ---- Base Node ----
FROM alpine:3.5 AS base
# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /root/chat
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS test
COPY . .
RUN  npm run lint && npm run setup && npm run test

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/chat/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 5000
CMD npm run start
```


### References

* [2017: Create lean Node.js image with Docker multi-stage buil](https://codefresh.io/docker-tutorial/node_docker_multistage/)

