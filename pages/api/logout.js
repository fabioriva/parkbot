import {
  getTokenCookie,
  removeTokenCookie,
  removeCookies
} from 'src/lib/auth-cookies'

export default async function logout (req, res) {
  const token = await getTokenCookie(req)
  // Already logged out.
  if (!token) {
    return res.status(200).end()
  }
  // removeTokenCookie(res)
  removeCookies(res)
  res.writeHead(302, { Location: '/' })
  res.end()
}
