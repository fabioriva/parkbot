import { aps } from 'src/constants/aps'
import { ALARMS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Alarms from 'src/components/alarms/Alarms'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => {
  return <Alarms {...props} />
}

export async function getServerSideProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  // const json = await fetchJson(`${BACKEND_URL}/alarms`)
  const json = await fetchJson(`${BACKEND_URL}/overview`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: ALARMS,
        pageTitle: 'title-alarms'
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))
