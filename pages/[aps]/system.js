import dynamic from 'next/dynamic'
import { aps } from 'src/constants/aps'
import { OVERVIEW, ACTIONS } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
import withAuthSync from 'src/hocs/withAuthSync'
import withSystem from 'src/hocs/withSystem'

const componentList = {
  bassano: dynamic(() => import('src/aps/bassano/Overview')),
  wareham: dynamic(() => import('src/aps/wareham/Overview')),
  wallstreet: dynamic(() => import('src/aps/wallstreet/Overview')),
  washingtonblvd: dynamic(() => import('src/aps/wallstreet/Overview'))
}

const Page = props => {
  const DynamicComponent = componentList[props.aps]
  return <DynamicComponent {...props} />
}

export async function getServerSideProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL, CARDS } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/overview`)

  return {
    props: {
      aps: params.aps,
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: OVERVIEW,
        userRole: ACTIONS,
        cards: CARDS
      },
      json
    }
  }
}

export default withAuthSync(withSystem(Page))
