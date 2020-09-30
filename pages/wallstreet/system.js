import fetch from 'src/lib/fetch'
import System from 'src/app/System'
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
    <System {...props} />
  )
}

export async function getServerSideProps(context) {
  const { currentUser } = await profile(context, USER)
  // overview
  const json = await fetch(`${BACKEND_URL}/overview`)

  return {
    props: {
      currentUser: { ...currentUser }, // currentUser,
      definitions: {
        activeTab: '1',
        apsName: APS_NAME,
        apsLocation: APS_LOCATION,
        pageTitle: 'System',
        websockUrl: WEBSOCK_URL
      },
      json: json
    }
  }
}

export default withAuthSync(Page)
