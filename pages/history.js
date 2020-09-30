import fetch from 'src/lib/fetch'
import History from 'src/components/History'
import {
  APS_ID,
  APS_NAME,
  APS_LOCATION,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/wallstreet'
// import { SERVICE } from 'constants/roles'
// import { profile, withAuthSync } from 'lib/auth'

async function fetchHistory (values) {
  console.log('fetchHistory', values)
  const { filter, range, number = 0 } = values
  const query = `system=${APS_ID}&dateFrom=${range[0]}&dateTo=${range[1]}&filter=${filter}&device=0&number=${number}`
  const url = `${BACKEND_URL}/history?${query}`
  console.log('!!!!!!!!!!!!', url)
  const json = await fetch(url)
  return json
}

const Page = (props) => {
  return <History {...props} fetchHistory={fetchHistory} />
}

export async function getServerSideProps (context) {
  // const { currentUser } = await profile(context, SERVICE)

  const from = new Date().setHours(0,0,0,0);
  const to = new Date().setHours(23,59,59,59);
  const json = await fetchHistory({ range: [from, to], filter: 'a' })

  return {
    props: {
      currentUser: 'dummy', // currentUser,
      definitions: {
        activeTab: '5',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        pageTitle: 'Logs',
        websockUrl: WEBSOCK_URL
      },
      json: json
    }
  }
}

export default Page // withAuthSync(Page)
