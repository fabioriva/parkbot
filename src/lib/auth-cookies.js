import { serialize, parse } from 'cookie'

const APS_NAME = 'parkbot-aps'
const I18N_NAME = 'parkbot-i18n'
const TOKEN_NAME = 'parkbot-token'
const MAX_AGE = 60 * 60 * 8 // 8 hours

export function getCookies (req) {
  const cookies = parseCookies(req)
  return cookies
  // return {
  //   aps: cookies[APS_NAME],
  //   locale: cookies[I18N_NAME],
  //   token: cookies[TOKEN_NAME]
  // }
}

export function setCookies (res, json) {
  const options = {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax'
  }
  const aps = serialize('parkbot-aps', json.aps, options)
  const i18n = serialize('parkbot-i18n', json.locale, options)
  const token = serialize(TOKEN_NAME, json.token, options)
  res.setHeader('Set-Cookie', [aps, i18n, token])
}

export function setTokenCookie (res, token) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax'
  })
  res.setHeader('Set-Cookie', cookie)
}

export function removeTokenCookie (res) {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/'
  })
  res.setHeader('Set-Cookie', cookie)
}

export function parseCookies (req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

export function getTokenCookie (req) {
  const cookies = parseCookies(req)
  return cookies[TOKEN_NAME]
}
