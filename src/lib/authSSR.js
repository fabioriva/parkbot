import { aps_ } from 'src/constants/aps'
import { hasRole } from '/src/constants/auth'
import { getCookies } from 'src/lib/authCookies'

export default async function authSSR (ctx, role) {
  const APS = aps_(ctx.params.aps)

  if (APS === undefined) {
    return {
      notFound: true
    }
  }

  const { aps, i18n, token } = await getCookies(ctx.req)

  if (ctx.params.aps !== aps || !token) {
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
  const response = await global.fetch(`${process.env.AUTH_PROVIDER}/profile`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: JSON.stringify({ token })
    }
  })
  const user = await response.json()
  // console.log('User profile:', user)
  return user
}
