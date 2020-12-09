import {
  APS_NAME,
  BACKEND_URL,
  WEBSOCK_URL,
  CARDS
} from 'src/constants/wallstreet'
import fetcher from 'src/lib/fetcher'
import { getUser } from 'src/lib/auth'
import withAuthSync from 'src/hocs/withAuthSyncSSR'
import withSystem from 'src/hocs/withSystemSSR'
// material-ui
import Grid from '@material-ui/core/Grid'

const Page = props => {
  return (
    <Grid container justify='space-between' alignItems='center'>
      {props.devices.map((item, key) => (
        <Grid item key={key} xs={12} lg={6} xl={4}>
          {item}
        </Grid>
      ))}
    </Grid>
  )
}

export const getServerSideProps = async ({ locale, locales, req, res }) => {
  const ns = ['system']
  const user = await getUser(req, res)
  if (!user) {
    return {
      props: {
        locale,
        locales,
        ns
      },
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const json = await fetcher(`${BACKEND_URL}/overview`)
  return {
    props: {
      locale: user.locale === 'en-US' ? 'en' : 'it',
      locales,
      ns,
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        cards: CARDS
      },
      json,
      user
    }
  }
}

export default withAuthSync(withSystem(Page))
