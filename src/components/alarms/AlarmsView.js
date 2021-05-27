import React from 'react'
import { useRouter } from 'next/router'
import { useData } from 'src/lib/useWebSocket'
import useTranslation from 'next-translate/useTranslation'
import Layout from 'src/components/Layout'
import Error from 'src/components/Error'
import ParkBot from 'src/components/ParkBot'
import AlarmsList from 'src/components/alarms/AlarmsList'
// material-ui
import Paper from '@material-ui/core/Paper'

export default function AlarmsView (props) {
  const { t } = useTranslation('alarms')
  const { definitions, json } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const router = useRouter()
  const { id } = router.query

  const [alarms, setAlarms] = React.useState(json.device.alarms)

  const { data } = useData(definitions.websockUrl.concat('/diagnostic/' + id), {
    initialData: json,
    page: 'diagnostic'
  })
  React.useEffect(() => {
    setAlarms(data.device.alarms)
  }, [data])

  console.log(alarms)

  return (
    <Layout {...props}>
      {alarms.length > 0 ? (
        <Paper>
          <AlarmsList alarms={alarms} />
        </Paper>
      ) : (
        <ParkBot message={t('no-alarms')} />
      )}
    </Layout>
  )
}
