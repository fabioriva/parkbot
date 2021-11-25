import { aps_ } from 'src/constants/aps'
import { hasRole } from '/src/constants/auth'
import { getCookies } from 'src/lib/authCookies'

export default async function authSSR (ctx, ns, role) {
  const APS = aps_(ns)

  if (APS === undefined) {
    return {
      notFound: true
    }
  }

  const { aps, i18n, token } = await getCookies(ctx.req)

  if (aps !== APS.ns || !token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = await profile(token)

  if (!hasRole(user, [role])) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    aps: APS.ns,
    apsName: APS.name,
    locale: i18n,
    user,
    token
  }
}

async function profile (token) {
  try {
    const response = await global.fetch(
      `${process.env.AUTH_PROVIDER}/profile`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: JSON.stringify({ token })
        }
      }
    )
    const user = await response.json()
    if (response.ok) {
      return user
    }

    const error = new Error(response.statusText)
    error.response = response
    error.data = data
    throw error
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message }
    }
    // throw error
    return { err: true }
  }
}
