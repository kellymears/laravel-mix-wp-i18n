# Laravel Mix WP i18n

Generate WordPress translation files from your mix config.

Additionally, if there are `.po` files present in the output directory they will be JSON-ified for easy getting.

## Usage

```js
require("laravel-mix-wp-i18n")

mix.i18n({ options })
```

## Options

```js
{
  dir: './path/to/write/to',
  file: 'filename.pot',
  skipJS: false,
}
```
