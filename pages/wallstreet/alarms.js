import { ALARMS } from 'src/constants/roles'
import { APS_NAME, BACKEND_URL, WEBSOCK_URL } from 'src/constants/wallstreet'
import fetcher from 'src/lib/fetcher'
import withAuthSync from 'src/hocs/withAuthSync'
import Alarms from 'src/components/Alarms'

const Page = props => <Alarms {...props} />

export const getStaticProps = async ({ locale, locales }) => {
  const ns = ['common']
  const json = await fetcher(BACKEND_URL.concat('/alarms'))
  return {
    props: {
      locale,
      locales,
      ns,
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: ALARMS
      },
      json
    }
  }
}

export default withAuthSync(Page)
