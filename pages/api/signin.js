import cookie from 'cookie'

const TOKEN_NAME = 'token'
const MAX_AGE = 60 * 60 * 12 // 12 hours

export default async (req, res) => {
  const { username, password } = await req.body
  const url = `${process.env.AUTH_PROVIDER}/login.js`
  console.log('/api/signin', url)
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    if (response.ok) {
      const { token, aps } = await response.json()

      const cookieSerialized = cookie.serialize(TOKEN_NAME, token, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
      })
      res.setHeader('Set-Cookie', cookieSerialized)
      res.status(200).json({ aps })
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    const { response } = error
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message })
  }
}
