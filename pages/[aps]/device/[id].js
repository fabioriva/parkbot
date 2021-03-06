import { aps } from 'src/constants/aps'
import { OVERVIEW } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import DeviceView from 'src/components/system/DeviceView'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => <DeviceView {...props} />

export async function getServerSideProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/device/${params.id}`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: OVERVIEW,
        pageTitle: 'title-motion' // json.device.a.name
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))
