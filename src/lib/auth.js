import Error from 'next/error'
import Router from 'next/router'
import cookie from 'cookie'

export const diagnostic = ctx => {
  const { diagnostic } = cookie.parse(ctx.req.headers.cookie || '')
  return diagnostic
}

export const login = ({ aps }) => {
  console.log(aps)
  Router.push(aps !== undefined ? `/${aps}/dashboard` : '/')
}

export const logout = async () => {
  await fetch('/api/signout')
  window.localStorage.setItem('logout', Date.now())
  Router.push('/')
}

export const auth = ctx => {
  const { token } = cookie.parse(ctx.req.headers.cookie || '')
  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
  return token
}

export const isAllowed = (user, rights) => rights.some(right => user.rights !== undefined ? user.rights.includes(right) : false)

export const hasRole = (user, roles) => roles.some(role => user.roles !== undefined ? user.roles.includes(role) : false)

export const profile = async (ctx, role) => {

  try {
    const token = auth(ctx)

    const pathname = getUrl(ctx)
    const [apsPath] = pathname.substring(1).split('/')

    // getServerSideProps only runs on server-side and never runs on the browser
    const url = `${process.env.AUTH_PROVIDER}/profile.js`

    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token }),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ apsPath })
    })

    if (response.ok) {
      const user = await response.json()
      console.log('user:', user)
      return {
        currentUser: user,
        statusCode: user.aps === apsPath && user.role <= role ? response.status : 401
      }
    } else {
      return {
        currentUser: {},
        statusCode: response.status
      }
    }
  } catch (error) {
    // Implementation or Network error
    return {
      currentUser: {},
      statusCode: 401
    }
  }
}

function getUrl (context = {}) {
  const { pathname } = new URL(context.req.url, 'http://w.w')
  // const pathname = (context.req && context.req.url) || context.pathname
  return pathname // (context.req && context.req.url) || context.pathname
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        Router.push('/')
      }
    }

    React.useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    if (props.statusCode > 200) return <Error statusCode={props.statusCode} />

    return <WrappedComponent {...props} />
  }

  return Wrapper
}
