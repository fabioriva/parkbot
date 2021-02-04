import { useRouter } from 'next/router'
import { useEffect } from 'react'

const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const router = useRouter()

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

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuthSync
