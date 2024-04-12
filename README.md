<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa
</h1>

<h4 align="center">
  <a href="https://docs.medusajs.com">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>

<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/develop/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/develop/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
 <p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  <a href="https://discord.gg/medusajs">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
</p>

## Getting Started

Visit the [Quickstart Guide](https://docs.medusajs.com/create-medusa-app) to set up a server.

Visit the [Docs](https://docs.medusajs.com/development/backend/prepare-environment) to learn more about our system requirements.

## What is Medusa

Medusa is a set of commerce modules and tools that allow you to build rich, reliable, and performant commerce applications without reinventing core commerce logic. The modules can be customized and used to build advanced ecommerce stores, marketplaces, or any product that needs foundational commerce primitives. All modules are open-source and freely available on npm.

Learn more about [Medusa’s architecture](https://docs.medusajs.com/development/fundamentals/architecture-overview) and [commerce modules](https://docs.medusajs.com/modules/overview) in the Docs.

## Roadmap, Upgrades & Plugins

You can view the planned, started and completed features in the [Roadmap discussion](https://github.com/medusajs/medusa/discussions/categories/roadmap).

Follow the [Upgrade Guides](https://docs.medusajs.com/upgrade-guides/) to keep your Medusa project up-to-date.

Check out all [available Medusa plugins](https://medusajs.com/plugins/).

## Community & Contributions

The community and core team are available in [GitHub Discussions](https://github.com/medusajs/medusa/discussions), where you can ask for support, discuss roadmap, and share ideas.

Our [Contribution Guide](https://github.com/medusajs/medusa/blob/develop/CONTRIBUTING.md) describes how to contribute to the codebase and Docs.

Join our [Discord server](https://discord.com/invite/medusajs) to meet other community members.

## Other channels

- [GitHub Issues](https://github.com/medusajs/medusa/issues)
- [Community Discord](https://discord.gg/medusajs)
- [Twitter](https://twitter.com/medusajs)
- [LinkedIn](https://www.linkedin.com/company/medusajs)
- [Medusa Blog](https://medusajs.com/blog/)

## License

Licensed under the [MIT License](https://github.com/medusajs/medusa/blob/develop/LICENSE).

## Steps to Edit Admin

### Prerequisites:

1. Use Node.js v18.17.1 (higher or equal to version 18.18 may cause errors, you need to test it yourself)

2. Use released package instead of working on the develop branch (but this is optional, again you can test it yourself)

3. A Medusa backend (API) is already running (since you are deploying admin separately, you should remove the admin section from medusa-config.js and package.json in your backend (API) )

Get Started:

1. Assume you have forked [Medusa](https://github.com/medusajs/medusa) and created a branch (you can also clone it locally if you prefer)

2. Run yarn and yarn build in the root directory

3. Go to packages/admin-ui run yarn dev and start your customization, you can see your changes promptly in the browser (admin-ui listens to localhost:9000 by default, you can either run a backend locally or go to packages/admin-ui/webpack.config.dev.ts#L18 and change it to your API service url)

4. Once you are done customizing and ready to deploy, run yarn build

5. Create .env file under packages/admin:

MEDUSA_ADMIN_BACKEND_URL=http://localhost:9000 # or your API service url

6. Copy file medusa-config.js to packages/admin

7. Add "build:admin": "medusa-admin build --deployment" to packages/admin/package.json scripts section

8. Run yarn build:admin

9. Deploy the static files under packages/admin/build to Cloudflare Pages or wherever you want
