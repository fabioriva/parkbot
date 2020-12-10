import { serialize, parse } from 'cookie'

const TOKEN_NAME = 'parkbot-i18n'

export function setI18nCookie (res, locale) {
  const cookie = serialize(TOKEN_NAME, locale)
  res.setHeader('Set-Cookie', cookie)
}
