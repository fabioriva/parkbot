import dynamic from 'next/dynamic'
import { aps, apsPaths } from 'src/constants/aps'
import { MAP, EDIT_STALL } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import withAuthSync from 'src/hocs/withAuthSync'
import withMap from 'src/hocs/withMap'

const componentList = {
  bassano: dynamic(() => import('src/aps/bassano/Map')),
  // chiattone: dynamic(() => import('src/aps/chiattone/Map')),
  wareham: dynamic(() => import('src/aps/wareham/Map')),
  wallstreet: dynamic(() => import('src/aps/wallstreet/Map'))
}

const Page = props => {
  const DynamicComponent = componentList[props.aps]
  return <DynamicComponent {...props} />
}

export async function getStaticPaths ({ locales }) {
  return {
    paths: await apsPaths(locales),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const {
    APS_NAME,
    BACKEND_URL,
    WEBSOCK_URL,
    CARDS,
    STALLS,
    STALL_STATUS
  } = await import(`src/constants/${params.aps}`)
  const json = await fetchJson(`${BACKEND_URL}/map`)

  return {
    props: {
      aps: params.aps,
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: MAP,
        userRole: EDIT_STALL,
        cards: CARDS,
        stalls: STALLS,
        stallStatus: STALL_STATUS
      },
      json
    },
    revalidate: 1 // In seconds
  }
}

export default withAuthSync(withMap(Page))