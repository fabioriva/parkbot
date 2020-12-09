import { encryptSession } from 'src/lib/iron'
import { setTokenCookie } from 'src/lib/auth-cookies'

export default async function login (req, res) {
  try {
    const { username, password } = await req.body
    const url = `${process.env.AUTH_PROVIDER}/login.js`
    const response = await global.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    if (response.ok) {
      const { aps, token } = await response.json()
      const session = await encryptSession(token)
      setTokenCookie(res, session)
      res.status(200).send({ aps, token })
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    console.log('/api/login', error)
    res.status(error.status || 500).end(error.message)
  }
}
