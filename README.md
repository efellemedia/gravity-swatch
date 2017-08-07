<p align="center"><img src="gravityswatch.png"></p>

# Introduction
Because there is a law such as gravity, the universe can and will create itself from nothing.

## Installation
The Gravity swatch theme is distributed through npm as a registered private package. You must first be given read-access to the repository to be able to download the package through yarn or npm. Be sure you've logged in under your account through `npm` or `yarn`.

```
yarn add @efelle/gravity-swatch
```

## Contributing
Run the following command to install the required dependencies.

```
yarn
```

## Compiling
Once the dependencies have been resolved, compiling the source code is simple:

```
yarn watch
```

the `watch` script will tell webpack to compile and watch for any future changes to the code base.

## Publishing
Once you are ready to publish, compile the source code for production:

```
yarn production
```

Bump the version in the `package.json` file, and finally, use `npm` to publish:

```
npm publish
```

## Utilities

The following utility classes were added as part of this swatch theme.

### `bg-white`

```
<div class="bg-white">Cras mattis consectetur purus sit amet fermentum.</div>
```
