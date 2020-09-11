import fetch from 'src/lib/fetch'
import Map from 'src/components/Map'
import styles from 'src/styles/nyu.map.js'

import {
  APS_NAME,
  APS_LOCATION,
  BACKEND_URL,
  WEBSOCK_URL,
  CARDS,
  STALLS,
  STALL_STATUS
} from 'src/constants/nyu'

const Page = (props) => {
  return (
    <React.Fragment>
      <Map {...props} />
      <style jsx>
        {styles}
      </style>
    </React.Fragment>
  )
}

export async function getServerSideProps (context) {
  // const { currentUser } = await profile(context, SERVICE)
  const url = `${BACKEND_URL}/map`
  const json = await fetch(url)
  return {
    props: {
      currentUser: 'dummy', // currentUser,
      definitions: {
        activeTab: '1',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        pageTitle: 'System Map',
        websockUrl: WEBSOCK_URL,
        cards: CARDS,
        stalls: STALLS,
        stallStatus: STALL_STATUS
      },
      json: json
    }
  }
}

export default Page