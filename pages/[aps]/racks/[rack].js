import paths from 'src/constants/aps'
import { RACKS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import Rack from 'src/components/racks/Rack'
import withAuthSync from 'src/hocs/withAuthSync'

const Page = props => {
  return <Rack {...props} />
}

export async function getStaticPaths ({ locales }) {
  return {
    paths: await paths(locales, { rack: '1' }),
    // paths: [
    //   { params: { aps: 'wallstreet', id: '1' }, locale: 'en' },
    //   { params: { aps: 'wallstreet', id: '1' }, locale: 'it' },
    //   { params: { aps: 'wallstreet', id: '2' }, locale: 'en' },
    //   { params: { aps: 'wallstreet', id: '2' }, locale: 'it' }
    // ],
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
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
