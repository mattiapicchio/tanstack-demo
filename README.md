# Tanstack Query Demo

## Table of Contents

- [Project Description](#project-description)
- [Setup](#setup)
- [Development server](#development-server)
- [Production server](#production-server)
- [Folder Structure](#folder-structure)
- [Linting-Formatting](#linting-formatting)
- [Documentation](#documentation)

## Project Description

A demo project focused on implementing [TanStack Query](https://tanstack.com/query/latest).

Features:

- API fetch strategy with Tanstack Query
- Client side data fetching
- React Compiler
- Infinite Scrolling with Intersection Observer
- Error handling and loading states
- File based routing

The project is built with:

- React 19
- TypeScript
- Tailwind CSS
- Vite
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Router](https://tanstack.com/router/latest)

## Setup

Install the Node version listed in [`.nvmrc`](.nvmrc).

```sh
nvm use
```

### Development server

Start the development server on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

### Production server

Build the application for production:

```sh
npm run build
```

Locally preview production build:

```sh
npm run preview
```

### Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```sh
VITE_API_URL=https://api.github.com/ # Required
VITE_GITHUB_TOKEN=<your_github_token> # Optional, needed to avoid rate limiting
```

## Folder Structure

```plain
../src
      |..
      |
      |-components : features indipendent components.
      |
      |-connectivity: logic for network/api requests.
      |
      |-helpers: hooks, helper methods that are not utils, restrict functions, etc
      |
      |-features: all the code for features in one single place. E.g., all the code for authentication can be in its own subfolder. Can be seen as a mini version of the /src folder for each feature.
      |
      |-data: Place shared data like constants, strings, json, etc
      |
      |-lib: folder for third party libraries (facade pattern)
      |
      |-utils: only utility functions, small and simple pure functions.
      |
      |..
```

## Linting-Formatting

Make sure you have Prettier and ESLint working in your editor and enable format on save.

Run all linting/formatting:

```sh
npm run lint
```

## Documentation

[React](https://react.dev/)

[Tailwind](https://tailwindcss.com/docs)

[Tanstack](https://tanstack.com/)

[Tanstack Router](https://tanstack.com/router/latest)

[Tanstack Query](https://tanstack.com/query/latest)
