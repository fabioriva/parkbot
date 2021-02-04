import { RACKS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Racks from 'src/components/racks/Racks'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  return <Racks {...props} />
}

export async function getServerSideProps ({ params }) {
  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/racks`)
  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: RACKS
      },
      json
    }
  }
}

export default withAuthSync(Page)
