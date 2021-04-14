import { aps } from 'src/constants/aps'
import { HISTORY } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import HistoryLog from 'src/components/history/HistoryLog'
import withAuthSync from 'src/hocs/withAuthSync'
import { withSnackbar } from 'notistack'

const Page = props => <HistoryLog {...props} />

export async function getServerSideProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/history/${params.log}`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: HISTORY,
        pageTitle: 'title-history'
      },
      json
    }
  }
}

export default withAuthSync(withSnackbar(Page))
