import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LoadingSkeleton from 'src/components/LoadingSkeleton'

const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const router = useRouter()
    // i18next
    const { ready } = useTranslation(props.ns)

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

    if (!ready) return <LoadingSkeleton />

    return <WrappedComponent {...props} />
  }

  // if (WrappedComponent.getInitialProps) {
  //   Wrapper.getInitialProps = WrappedComponent.getInitialProps
  // }

  return Wrapper
}

export default withAuthSync
