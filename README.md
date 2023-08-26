# Ionic + Preact Template [![CI](https://github.com/webxdc/webxdc-ionic-preact/actions/workflows/ci.yml/badge.svg)](https://github.com/webxdc/webxdc-ionic-preact/actions/workflows/ci.yml) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An starter Vite + Ionic + Preact template for Webxdc developers.

## Usage

### Installing dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Checking the code

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm dev-mini
# Alternatively to test in a more advanced WebXDC emulator:
pnpm dev
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag v1.0.1
git push origin v1.0.1
```

## Try it now!

[**Use this template**](https://github.com/webxdc/webxdc-ionic-preact/generate)
