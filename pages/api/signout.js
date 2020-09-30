import cookie from 'cookie'

const TOKEN_NAME = 'token'

export default async function logout (req, res) {
  const { token } = cookie.parse(req.headers.cookie ?? '')
  // Already logged out.
  if (!token) {
    return res.status(200).end()
  }
  // Clear cookie.
  const cookieSerialized = cookie.serialize(TOKEN_NAME, '', {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1,
    httpOnly: true,
    path: '/'
  })
  res.setHeader('Set-Cookie', cookieSerialized)
  res.status(200).end()
}
