# Laravel Mix WP i18n

Generate WordPress translation files from your mix config.

Additionally, if there are `.po` files present in the output directory they will be JSON-ified for easy getting.

## Install

`npm install laravel-mix-wordpress-translate --save-dev`

`yarn add -D laravel-mix-wordpress-translate`

## Usage

```js
require("laravel-mix-wp-i18n")

mix.i18n(dir, file)
```

## Options

```js
mix.i18n('./lang/', 'trans.pot')
```
