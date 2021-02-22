import { aps } from 'src/constants/aps'
import { OVERVIEW } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import withAuthSync from 'src/hocs/withAuthSync'
import Device from 'src/components/device/Device'

const Page = props => <Device {...props} />

export async function getServerSideProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/overview`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: OVERVIEW
      },
      json
    }
  }
}

// export default withAuthSync(Page)
export default Page
