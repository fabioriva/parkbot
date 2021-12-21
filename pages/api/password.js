import { getTokenCookie } from 'src/lib/authCookies'

export default async (req, res) => {
  const { username, current, password, confirm } = await req.body
  try {
    const token = await getTokenCookie(req)
    const url = `${process.env.AUTH_PROVIDER}/password`
    const response = await global.fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.stringify({ token })
      },
      body: JSON.stringify({ username, current, password, confirm })
    })
    const json = await response.json()
    if (response.ok) {
      res.status(200).json({ ...json })
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
