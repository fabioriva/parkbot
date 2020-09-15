import fetch from 'src/lib/fetch'
import History from 'src/components/History'
import {
  APS_ID,
  APS_NAME,
  APS_LOCATION,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/nyu'
// import { SERVICE } from 'constants/roles'
// import { profile, withAuthSync } from 'lib/auth'

// import dayjs from 'dayjs'
// import {format} from 'date-fns'

async function fetchHistory (values) {
  const { filter, range, number = 0 } = values
  console.log('fetchHistory', filter, range)
  // const from = dayjs(range[0]).format('YYYY-MM-DD HH:mm:ss')
  // const to = dayjs(range[1]).format('YYYY-MM-DD HH:mm:ss')
  const from = range[0]
  const to  = range[1]
  const query = `system=${APS_ID}&dateFrom=${from}&dateTo=${to}&filter=${filter}&device=0&number=${number}`
  const url = `${BACKEND_URL}/history?${query}`
  const json = await fetch(url)
  return json
}

const Page = (props) => {
  return <History {...props} fetchHistory={fetchHistory} />
}

export async function getServerSideProps (context) {
  // const { currentUser } = await profile(context, SERVICE)
  // const from = dayjs().hour(0).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss')
  // const to = dayjs().hour(23).minute(59).second(59).format('YYYY-MM-DD HH:mm:ss')

  const from = new Date().setHours(0,0,0,0);
  const to = new Date().setHours(23,59,59,59);

  // console.log('date-fns', format(from, 'yyyy-MM-dd HH:mm:ss'), format(to, 'yyyy-MM-dd HH:mm:ss'))
  // const values = {
  //   range: [
  //     format(from, 'yyyy-MM-dd HH:mm:ss'),
  //     format(to, 'yyyy-MM-dd HH:mm:ss')
  //   ],
  //   filter: 'a'
  // }
  // const json = await fetchHistory(values)
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
