# Code Ninja V2

## Dev Guide

- Update articles in `/content` directory
- Run `npm run build` automatically invoke mdx-parser to generate static content from `/content` directory and then build a snowpack distribution with all your assets (ready to be deployed)
- Run `npm run deploy` => this will build & publish built content to s3 bucket for deployment
- Run `npm run cache-invalidation` => this will create a cache invalidation for cloudfront distribution **(needs to be tested if this runs correctly. Will check it the next time I need to invalidate cache)**

Run these scripts for specific situations:

- Run `npm run reload` in case you want to reload deno scripts in local cache
- Run `npm run postbuild` in case you want to build your assets
- Run `npm run build-deploy` in case you want to build & deploy sequentially
- Run build using local mdx-parser script, use `npm run local-precompile` inside `frontend` directory
  (\*Note: this requires deno-scripts repo cloned in the same directory as code-ninja-v2)

## Technical / Architectural Design Decision

### TADD 001: Commit message markers & their meanings

```md
- frontend: frontend chore
- backend: backend chore
- deploy: deploy chore

frontend

- feature: functionality
- module: end-to-end functionality

backend

- function: functionality
- service: end-to-end functionality

deploy

- stack: cdk stacks
- construct: cdk constructs

general

- refactor
- bugfix
- fix (minor fixes)
- enhancement
- docs
- tadd
- content
```
