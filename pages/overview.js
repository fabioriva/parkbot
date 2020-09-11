import fetch from 'src/lib/fetch'
import Overview from 'src/components/Overview'
import {
  APS_NAME,
  APS_LOCATION,
  CARDS,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/nyu'

const Page = (props) => {
  return <Overview {...props} />
}

export async function getServerSideProps (context) {
  // const { currentUser } = await profile(context, SERVICE)
  const url = `${BACKEND_URL}/overview`
  const json = await fetch(url)
  return {
    props: {
      currentUser: 'dummy', // currentUser,
      definitions: {
        activeTab: '1',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        cards: CARDS,
        pageTitle: 'System Overview',
        websockUrl: WEBSOCK_URL
      },
      json: json
    }
  }
}

export default Page