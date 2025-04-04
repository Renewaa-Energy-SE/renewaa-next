# Renewaa Next

[![Build Status](https://github.com/Renewaa-Energy-SE/renewaa-next/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/Renewaa-Energy-SE/renewaa-next/actions/workflows/docker-publish.yml)
[![Deploy Status](https://github.com/Renewaa-Energy-SE/renewaa-next/actions/workflows/deploy.yml/badge.svg)](https://github.com/Renewaa-Energy-SE/renewaa-next/actions/workflows/deploy.yml)
[![Testing Status](https://github.com/Renewaa-Energy-SE/renewaa-next/actions/workflows/test.yml/badge.svg)](https://github.com/Renewaa-Energy-SE/renewaa-next/actions/workflows/test.yml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Docker Commands

To build the Docker image:

```bash
docker build -t renewaa-next .
```

To run the Docker container:

```bash
docker run -p 3000:3000 renewaa-next
```

To stop and remove the container:

```bash
docker stop <container_id>
docker rm <container_id>
```

