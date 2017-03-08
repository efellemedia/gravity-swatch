# Gravity Bootstrap 4 Swatch Theme
Because there is a law such as gravity, the universe can and will create itself from nothing.

## Yarn
We use Yarn in place of npm to install node dependencies. Yarn is simple to install if you're on macOS through brew:

```
brew update
brew install yarn
yarn --version
```

## Installation
Bootstrap is loaded through through npm and webpack. Run the following command to install the required dependencies.

```
yarn
```

## Compiling
Once the dependencies have been resolved, compiling the source code is simple:

```
yarn run watch
```

the `watch` script will tell webpack to compile and watch for any future changes to the code base.

---

## Utilities

The following utility classes were added as part of this swatch theme.

### `bg-white`

```
<div class="bg-white">Cras mattis consectetur purus sit amet fermentum.</div>
```
