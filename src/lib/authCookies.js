import { serialize, parse } from 'cookie'

const APS = 'aps'
const I18N = 'i18n'
const TOKEN = 'token'
const MAX_AGE = 60 * 60 * 8 // 8 hours

export function getCookies (req) {
  const cookies = parseCookies(req)
  return cookies
}

export function setCookies (res, json) {
  const options = {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax'
  }
  const aps = serialize(APS, json.aps, options)
  const i18n = serialize(I18N, json.locale, options)
  const token = serialize(TOKEN, json.token, options)
  res.setHeader('Set-Cookie', [aps, i18n, token])
}

export function removeCookies (res) {
  const options = { maxAge: -1, path: '/' }
  res.setHeader('Set-Cookie', [
    serialize(APS, '', options),
    serialize(I18N, '', options),
    serialize(TOKEN, '', options)
  ])
}

export function setTokenCookie (res, token) {
  const cookie = serialize(TOKEN, token, {
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
  const cookie = serialize(TOKEN, '', {
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
  return cookies[TOKEN]
}
