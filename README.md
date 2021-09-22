# Simple Example Setup using `@vue-bridge` packages

This is an example library using:

*  `@vue-bridge/runtime`
*  `@vue-bridge/eslint-config`
*  `@vue-bridge/testing`

It builds and tests a Vue library with a few siple components, targeting Vue 3, but written cross-compatible. 

It's source code, including tests, are re-used in `./vue2` to build and test the same source for Vue 2.

## Developing


## Linting

```bash
yarn lint
```

This will lint and auto-fix and errors in `/src`

## Building

```bash
yarn build
```

This command will run `vite build` in both the project root and in `/vue2`, building the library for Vue 3 into `/dist` and for Vue 2 into `/vue2/dist`.

Alternatively, you can output the Vue 2 bundle into a subdirectory of the main `/dist` folder - see `build.outDir` option in `vue/vite.config.js`. This way, you can later publish both versions as one package:

```js
// Usage for Vue 3
`import { Input } from 'vue3-example-library` 
// Usage for Vue 2
`import { Input } from 'vue3-example-library/vue2` 
```

See also [Publishing](#publishing) below on how to properly publish in that case.

## Unit Testing

```bash
yarn test
```

This will run jest in both the project root and in `/vue2`. Both runs will use the same spec files from `/src`. For the Vue 2 run, we re-map a couple of things in `jest.config.js` to use the Vue 2 packages installed in `/vue2/node_modules` instead of the Vue 3 equivalents in `/node_modules/`.

## Publishing

The default setup in this demo will build two distinct bundles, which you would have to release separately - 

* Vue 3: `/dist`
* Vue 2: `/vue2/dist`

Consequently, there's two `package.json` files, one in root, one in `/vue2`, and both have different package names, following the `vue3-*` and `vue2-*`.

### Alternative: Both versions in one package.

As explained above in the [Building](#building) section, you can put both bundles in the main `/dist` folder (vue2 into a subfolder) and publish as one package.

In that case you have to make sure to name exports sufficiently:


```json
{
  "exports": {
    ".": {
      "import": "./dist/vue3-example-library.es.js",
      "require": "./dist/vue3-example-library.cjs.js"
    },
    "./vue2": {
      "import": "./dist/vue2/vue2-example-library.es.js",
      "require": "./dist/vue2/vue2-example-library.cjs.js"
    },
    "./style.css": "./dist/style.css"
  },
}
```