# Vite React TS TW Starter

## Table of Contents

- [Setup](#setup)
- [Development server](#development-server)
- [Production server](#production-server)
- [Folder Structure](#folder-structure)
- [Linting-Formatting](#linting-formatting)
- [Documentation](#documentation)

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
npm run start
```

## Folder Structure

```b
../src
      |..
      |
      |-components : place components here.
      |
      |-connectivity: this is where you define network/api requests.
      |
      |-helpers: hooks, helper methods that are not utils, restrict functions, etc
      |
      |-pages: place all the pages here.
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

[Tailwind](https://v2.tailwindcss.com/docs)

[Tanstack](https://tanstack.com/)

[Tanstack Router](https://tanstack.com/router/latest)

[Tanstack Query](https://tanstack.com/query/latest)
