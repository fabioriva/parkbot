import fetch from 'src/lib/fetch'
import Dashboard from 'src/app/Dashboard'
import {
  APS_ID,
  APS_NAME,
  APS_LOCATION,
  BACKEND_URL,
  WEBSOCK_URL
} from 'src/constants/wallstreet'
import { USER } from 'src/constants/roles'
import { diagnostic, profile, withAuthSync } from 'src/lib/auth'

const Page = (props) => {
  return (
    <Dashboard {...props} />
  )
}

export async function getServerSideProps(context) {
  const { currentUser } = await profile(context, USER)
  // overview
  const json = await fetch(`${BACKEND_URL}/overview`)
  // cards
  const cardsList = await fetch(`${BACKEND_URL}/cards`)
  // activity
  const { cards } = currentUser
  const from = new Date('2020-01-06T00:00:00'); //.setHours(0,0,0,0);
  const to = new Date().setHours(23,59,59,59);
  const query = `system=${APS_ID}&dateFrom=${from}&dateTo=${to}&filter=${'c'}&number=[${cards}]`
  const activity = await fetch(`${BACKEND_URL}/activity?${query}`)

  return {
    props: {
      currentUser: { ...currentUser }, // currentUser,
      definitions: {
        activeTab: '1',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        pageTitle: 'Dashboard',
        websockUrl: WEBSOCK_URL
      },
      json: json,
      cards: cardsList,
      activity: activity
    },
  }
}

export default withAuthSync(Page)
