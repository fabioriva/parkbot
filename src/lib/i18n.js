import i18next from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export default function i18n (locale, locales, ns) {
  // console.log('18n', locale, locales, ns)
  i18next
    .use(HttpBackend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // resources,
      lng: locale || 'en',
      languages: locales || ['en'],
      fallbackLng: 'en',
      ns: ns || ['common'],
      defaultNS: 'common',
      keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        escapeValue: false // react already safes from xss
      },
      react: {
        useSuspense: false
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }
    })
  return i18next
}
