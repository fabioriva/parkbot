import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
// import { useUser } from 'src/lib/hooks'
import fetcher from 'src/lib/fetcher'
import {
  APS_NAME,
  BACKEND_URL,
  WEBSOCK_URL,
  CARDS
} from 'src/constants/wallstreet'

export default function GspPage (props) {
  const router = useRouter()
  const { defaultLocale } = router

  // const { t, i18n } = useTranslation()

  const { t, i18n, ready } = useTranslation(['common', 'page'], {
    useSuspense: false
  })

  const user = {}
  // const user = useUser({ redirectTo: '/', redirectIfFound: false })
  // if (!user) {
  //   return <div>Loading...</div>
  // }
  // console.log(user)

  return (
    <div>
      <h1>{t('Welcome to React')}</h1>
      <p>{t('page:key', { name: user.username })}</p>
      <h1>getStaticProps page</h1>
      <p>Current locale: {props.locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(props.locales)}</p>

      <Link href='/gsp/first'>
        <a>To dynamic getStaticProps page</a>
      </Link>
      <br />

      <Link href='/gssp'>
        <a>To getServerSideProps page</a>
      </Link>
      <br />

      <Link href='/'>
        <a>To index page</a>
      </Link>
      <br />
    </div>
  )
}

export const getStaticProps = async ({ locale, locales }) => {
  const ns = ['common', 'page']
  const json = await fetcher(`${BACKEND_URL}/overview`)
  return {
    props: {
      locale,
      locales,
      ns,
      json
    }
  }
}
