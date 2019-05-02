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

  register(dir, file) {

    this.config = {
      translation: {
        dir: dir ? dir : './',
        file: file ? file : 'translation.pot'
      },
    }
  }

  boot() {
    const sh = require('shelljs')
    const {file, dir} = this.config.translation

    sh.exec(`wp i18n make-pot . ${dir}${file}`, { silent: true })
    sh.exec(`wp i18n make-json ${dir}`, { silent: true })
  }
}

mix.extend('i18n', new I18n())
