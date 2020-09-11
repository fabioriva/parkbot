import fetch from 'src/lib/fetch'
import Cards from 'src/components/Cards'
import {
  APS_NAME,
  APS_LOCATION,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/nyu'

const Page = (props) => {
  return <Cards {...props} />
}

export async function getServerSideProps (context) {
  // const { currentUser } = await profile(context, SERVICE)
  const url = `${BACKEND_URL}/cards`
  const json = await fetch(url)
  return {
    props: {
      currentUser: 'dummy', // currentUser,
      definitions: {
        activeTab: '1',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        pageTitle: 'System Cards',
        websockUrl: WEBSOCK_URL
      },
      json: json
    }
  }
}

export default Page
