import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useUser from 'src/lib/useUser'
import Loading from 'src/components/Loading'

const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const router = useRouter()
    const { aps } = router.query

    const syncLogout = event => {
      if (event.key === 'logout') {
        router.push('/')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    const { user } = useUser({
      aps,
      redirectTo: '/',
      redirectIfFound: false,
      roles: [props.definitions.pageRole]
    })

    if (!user) return <Loading />

    return <WrappedComponent {...props} user={user} />
  }

  return Wrapper
}

export default withAuthSync
