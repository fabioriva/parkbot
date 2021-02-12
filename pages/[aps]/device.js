import { aps } from 'src/constants/aps'
import { CARDS, EDIT_CARD } from 'src/constants/roles'
import fetchJson from 'src/lib/fetchJson'
// import withAuthSync from 'src/hocs/withAuthSync'

import { useState, useEffect } from 'react'
import { useData } from 'src/lib/websocket'

const Page = props => {
  // console.log(props)
  const { mesg } = useData(
    'device',
    `${props.definitions.websockUrl}?channel=ch1`
  )

  const [device, setDevice] = useState({})

  useEffect(() => {
    if (mesg) {
      setDevice(mesg)
    }
  }, [mesg])

  console.log(device)

  return (
    <>
      <div>Flap</div>
      <div>{device.motors !== undefined && device.motors[0].motion}</div>
      <div>{device.motors !== undefined && device.motors[0].position}</div>
      <br />
      {/* <div>Lock</div>
      <div>{device.motors.length > 0 && device.motors[1].motion}</div>
      <div>{device.motors.length > 0 && device.motors[1].position}</div> */}
    </>
  )
}

export async function getServerSideProps ({ params }) {
  if (aps(params.aps) === -1) {
    return {
      notFound: true
    }
  }

  const { APS_NAME, BACKEND_URL, WEBSOCK_URL } = await import(
    `src/constants/${params.aps}`
  )
  const json = await fetchJson(`${BACKEND_URL}/device`)

  return {
    props: {
      definitions: {
        apsName: APS_NAME,
        backendUrl: BACKEND_URL,
        websockUrl: WEBSOCK_URL,
        pageRole: CARDS,
        userRole: EDIT_CARD
      },
      json
    }
  }
}

// export default withAuthSync(Page)
export default Page
