import { getTokenCookie } from 'src/lib/auth-cookies'

export default async function profile (req, res) {
  try {
    const token = await getTokenCookie(req)
    if (!token) {
      res.status(200).send({ user: false })
    } else {
      const url = `${process.env.AUTH_PROVIDER}/profile` // .js`
      const response = await global.fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: JSON.stringify({ token })
        },
        body: JSON.stringify({ apsPath: 'aps' })
      })
      const user = await response.json()
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(error.status || 500).end(error.message)
  }
}
