import Error from 'next/error'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useData } from 'src/lib/websocket'
import Desktop from 'src/components/Layout'
import Mobile from 'src/components/Mobile'
import List from 'src/components/AlarmsList'
// material-ui
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function merge (groups) {
  let flat = []
  groups.forEach(group => {
    flat = flat.concat(group.active)
  })
  return flat
}

const Alarms = props => {
  const { t } = useTranslation(['common'])
  const { definitions, json, user } = props
  const { apsName, websockUrl } = definitions

  const [alarms, setAlarms] = useState(json)

  const { mesg } = useData('alarms', `${websockUrl}?channel=ch1`)

  useEffect(() => {
    if (mesg) setAlarms(mesg)
  })

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  if (json.err) return <Error statusCode={500} />

  return (
    <>
      {isDesktop && (
        <Desktop
          apsName={apsName}
          pageTitle={t('alarms')}
          socket={`${websockUrl}?channel=ch2`}
          user={user}
        >
          <span>Desktop</span>
          <List alarms={merge(alarms)} />
        </Desktop>
      )}
      {!isDesktop && (
        <Mobile
          apsName={apsName}
          pageTitle={t('alarms')}
          socket={`${websockUrl}?channel=ch2`}
          user={user}
        >
          <span>Mobile</span>
          <List alarms={merge(alarms)} />
        </Mobile>
      )}
    </>
  )

  // if (isDesktop) {
  //   return (
  //     <Desktop
  //       apsName={apsName}
  //       pageTitle={t('alarms')}
  //       socket={`${websockUrl}?channel=ch2`}
  //       user={user}
  //     >
  //       <span>Desktop width: {width}</span>
  //       <List alarms={merge(alarms)} />
  //     </Desktop>
  //   )
  // } else {
  //   return (
  //     <Mobile
  //       apsName={apsName}
  //       pageTitle={t('alarms')}
  //       socket={`${websockUrl}?channel=ch2`}
  //       user={user}
  //     >
  //       <span>Mobile width: {width}</span>
  //       <List alarms={merge(alarms)} />
  //     </Mobile>
  //   )
  // }
}

export default Alarms
