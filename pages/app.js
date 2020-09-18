import fetch from 'src/lib/fetch'
import App from 'src/app/App'
import {
  APS_NAME,
  APS_LOCATION,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/nyu'



const Page = (props) => {
  // console.log(props)
  return (
    <App {...props} />
  )
}

export async function getStaticProps(context) {
  console.log(context)
  const currentUser = {
    fullName: 'Fabio Riva'
  }
  const url = `${BACKEND_URL}/overview`
  const json = await fetch(url)
  return {
    props: {
      currentUser: currentUser,
      definitions: {
        activeTab: '1',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        pageTitle: 'Main',
        websockUrl: WEBSOCK_URL
      },
      json: json
    },
  }
}

export default Page
