import { aps } from 'src/constants/aps'
import { RACKS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Rack from 'src/components/racks/Rack'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  return <Rack {...props} />
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
  const json = await fetchJson(`${BACKEND_URL}/rack/${params.id}`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: RACKS,
        pageTitle: 'title-racks'
      },
      json
    }
  }
}

export default withAuthSync(Page)
