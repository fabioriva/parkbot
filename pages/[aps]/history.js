import parser from 'ua-parser-js'
import { HISTORY } from 'src/constants/roles'
import fetchHistory from 'src/lib/fetchHistory'
import History from 'src/components/history/History'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  return <History {...props} />
}

export async function getServerSideProps ({ params, req }) {
  const ua = parser(req.headers['user-agent'])

  if (ua.device.type === 'mobile') {
    return {
      redirect: {
        destination: `/m/${params.aps}/history`,
        permanent: false
      }
    }
  }

  const { APS_ID, APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchHistory(APS_ID, BACKEND_URL, { filter: 'a' })

  return {
    props: {
      definitions: {
        apsId: APS_ID,
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: HISTORY
        // userRole: {}
      },
      json
    }
  }
}

export default withAuthSync(Page)
