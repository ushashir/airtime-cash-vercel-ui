FROM node:18.10.0-bullseye-slim as build
# pick an image that already has node 14, the alpine version, installed

WORKDIR /app
# create(if it doesn't aleady exist) and visit a folder called app ad stay there

COPY . .
#copy everything from my local machine(host) to the new machine(the place I'm currently in = Workdir/app)

RUN yarn
#to install all our dependencies (without the devdependencies. If someone downloads the image ad rus it, it won't install the devdependecies)



FROM node:18.10.0-bullseye-slim

COPY --from=build /app /

CMD ["yarn", "start"]
