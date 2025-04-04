# Use the Node.js 22 Alpine image as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /renewaa

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy all files
COPY . .

# Generate Prisma Client
RUN yarn prisma generate

# Build the app using Yarn
RUN yarn build

# Start the app using Yarn and tsconfig-paths
CMD ["yarn", "start"]