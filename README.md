# Tout Monorepo

This monorepo uses [Turborepo](https://turbo.build/repo) to manage two web applications: a **dashboard** and a **web app**. It provides a scalable and efficient development environment with shared configurations and components.

## Structure

This Turborepo includes the following apps and packages:

### Apps

* `apps/web`: The main public-facing web application (e.g., landing page, user interface)
* `apps/dashboard`: The internal dashboard/admin panel

### Packages

* `packages/ui`: Shared React UI components used across both apps
* `packages/eslint-config`: Shared ESLint configuration (`eslint-config-next`, `prettier`)
* `packages/typescript-config`: Shared TypeScript configuration (`tsconfig.json`)

All apps and packages are written in **TypeScript**.

## Getting Started

Clone the repo and install dependencies:

```bash
pnpm install
```

### Develop

To start all apps for development:

```bash
pnpm dev
```

To run a specific app (e.g., dashboard):

```bash
pnpm dev --filter dashboard
```

### Build

To build all apps and packages:

```bash
pnpm build
```

## Remote Caching

Turborepo supports [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching), which can greatly speed up builds in CI/CD and across teams.

Enable it with:

```bash
npx turbo login
npx turbo link
```

You’ll need a [Vercel](https://vercel.com/) account for this.

## Tools Used

* [Turborepo](https://turbo.build/)
* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [PNPM](https://pnpm.io/)

## Learn More

* [Turborepo Docs](https://turbo.build/repo/docs)
* [Monorepo Patterns](https://turbo.build/repo/docs/handbook)
* [Remote Caching Guide](https://turbo.build/repo/docs/core-concepts/remote-caching)