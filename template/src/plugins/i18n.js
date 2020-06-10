import Vue from 'vue';
import VueI18n from 'vue-i18n'

import de from '../locales/de.json'
import en from '../locales/en.json'

Vue.use(VueI18n)

const messages = {
  de: {
    message: de
  },
  en: {
    message: en
  }
}

const i18n = new VueI18n({
  locale: 'de',
  messages,
})

export default i18n