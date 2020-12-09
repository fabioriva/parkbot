import { getSession } from 'src/lib/iron'

const hasAps = (aps, req) => {
  const url = new URL(req.url, 'http://w.w')
  const [apsFromUrl] = url.pathname.substring(1).split('/')
  return aps === apsFromUrl
}

export async function getUser (req, res) {
  try {
    const token = await getSession(req)
    if (!token) {
      return
    }
    const url = `${process.env.AUTH_PROVIDER}/profile.js`
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
    if (!hasAps(user.aps, req)) {
      return
    }
    return user
  } catch (error) {
    return error ? null : { user: false }
  }
}

// export function getApsFromUrlSsr (req) {
//   const url = new URL(req.url, 'http://w.w')
//   const [aps] = url.pathname.substring(1).split('/')
//   return aps
// }

// export const isAllowed = (user, rights) =>
//   rights.some(right =>
//     user.rights !== undefined ? user.rights.includes(right) : false
//   )

// export const hasRole = (user, roles) =>
//   roles.some(role =>
//     user.roles !== undefined ? user.roles.includes(role) : false
//   )
