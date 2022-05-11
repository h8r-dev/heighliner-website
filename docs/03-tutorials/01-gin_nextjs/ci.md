---
title: CI
sidebar_position: 3
---

`Gin-Nextjs` stack using `GitHub Action` to build docker image, each frontend and backend repository has its own Dockerfile and GitHub workflows.

Let's take frontend repository as example, the Dockerfile look like:

```
# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# If using npm with a `package-lock.json` comment out above and use below instead
# COPY package.json package-lock.json ./ 
# RUN npm ci

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
......
```

`GitHub Workflows` are stored in each backend and frontend repository, `.github/workflows/docker-publish.yml` file looks like:

```
name: Create and publish a Docker image
on:
  push:
    branches: ['main']
    tags: 
      - v*
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
  ORG: lyzhang1999
  HELM_REPO: gin-next-app-deploy
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Set output
        id: vars
        run: echo ::set-output name=tag::${GITHUB_REF#refs/*/}
      - name: Log in to the Container registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
......
```