const mix = require('laravel-mix')

class I18n {
  name() {
    return 'i18n'
  }

  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return ['shelljs']
  }

  register(config) {
    const {dir, file, skipJS} = config

    this.config = {
      translation: {
        dir: dir ? dir : './',
        file: file ? file : 'translation.pot',
        skipJS: skipJS ? skipJS : false,
      },
    }
  }

  boot() {
    const sh = require('shelljs')
    const {file, dir, skipJS} = this.config.translation

    sh.exec(`wp i18n make-pot ${skipJS ?
      '--skip_js' : false
    }. ${dir}${file}`, { silent: true })

    sh.exec(`wp i18n make-json ${dir}`, { silent: true })
  }
}

mix.extend('i18n', new I18n())
