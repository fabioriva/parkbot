import { OVERVIEW } from 'src/constants/roles'
import {
  APS_NAME,
  BACKEND_URL,
  WEBSOCK_URL,
  CARDS
} from 'src/constants/wallstreet'
import fetcher from 'src/lib/fetcher'
import withAuthSync from 'src/hocs/withAuthSync'
import withSystem from 'src/hocs/withSystem'
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

export const getStaticProps = async ({ locale, locales }) => {
  const ns = ['system']
  const json = await fetcher(`${BACKEND_URL}/overview`)
  return {
    props: {
      locale,
      locales,
      ns,
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        cards: CARDS,
        pageRole: OVERVIEW
      },
      json
    }
  }
}

export default withAuthSync(withSystem(Page))
