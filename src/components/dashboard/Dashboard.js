import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Grid from '@mui/material/Grid'
import Layout from 'src/components/Layout'
import Activity from 'src/components/dashboard/Activity'
import Devices from 'src/components/dashboard/Devices'
import Widget from 'src/components/dashboard/Widget'
import Occupancy from 'src/components/charts/Occupancy'
import Operations from 'src/components/charts/Operations'
// import QueueList from 'src/components/overview/QueueList'
// import { useData } from 'src/lib/useWebSocket'
import useSWR from 'swr'

const fetcher = url => global.fetch(url).then(r => r.json())

export default function Dashboard (props) {
  const { t } = useTranslation('dashboard')

  if (props.json.err)
    return (
      <Layout {...props} pageTitle={t('header-title')}>
        <div>Fetch Error</div>
      </Layout>
    )

  const [dashboard, setDashboard] = React.useState(props.json)

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/dashboard`
  const { data, error } = useSWR(url, fetcher, {
    initialData: dashboard,
    refreshInterval: 1000
  })

  React.useEffect(() => {
    if (data) setDashboard(data)
  }, [data])

  const { activity, cards, occupancy, operations, system } = dashboard

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <Grid
        container
        alignItems='center'
        justifyContent='space-around'
        spacing={2}
      >
        <Grid item xs={12} lg>
          <Widget href={`/${props.aps}/overview`} title={t('devices-title')}>
            <Devices devices={system.devices} aps={props.aps} />
          </Widget>
        </Grid>
        <Grid item xs={12} lg>
          <Widget href={`/${props.aps}/history`} title={t('activity-title')}>
            <Activity aps={props.aps} activity={activity} />
          </Widget>
        </Grid>
        <Grid item xs={12} lg>
          <Widget href={`/${props.aps}/map`} title={t('occupancy-title')}>
            <Occupancy
              // animation
              data={[
                occupancy[0].value,
                occupancy[1].value,
                occupancy[2].value
              ]}
              labels={[t('busy'), t('free'), t('lock')]}
              height={320}
              width={320}
            />
          </Widget>
        </Grid>
        {/* <Grid item sx={{ display: 'flex' }} xs={12} lg>
          <Widget href={`/${props.aps}/map`} title={t('occupancy-title')}>
            <QueueList
              queue={system.exitQueue.queueList}
              onDelete={props.onDelete}
            />
          </Widget>
        </Grid> */}
        {/* {operations[2].data.length > 0 && (
          <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Widget
              href={`/${props.aps}/statistics`}
              title={t('operations-title')}
            >
              <Operations
                // animation
                data={operations[2].data}
                labels={[t('entries'), t('exits'), t('total')]}
                title={`${operations[2].title}: ${operations[2].label}`}
                // title={`${t(dailyOperations.i18n)}: ${dailyOperations.label}`}
                height={'40%'}
                width={'100%'}
              />
            </Widget>
          </Grid>
        )} */}
      </Grid>
    </Layout>
  )
}
