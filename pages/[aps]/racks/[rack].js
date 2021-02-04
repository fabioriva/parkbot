import { RACKS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Rack from 'src/components/racks/Rack'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  return <Rack {...props} />
}

export async function getServerSideProps ({ params }) {
  // console.log('getStaticProps', params)
  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/racks`) // /${params.rack}`)
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
