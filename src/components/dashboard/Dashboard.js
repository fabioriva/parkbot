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

  const [dashboard, setDashboard] = React.useState(props.json)

  const { activity, cards, occupancy, operations, system } = dashboard

  const dailyOperations = operations[2]

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.aps}/dashboard`
  // const { data } = useData(url, {
  //   initialData: dashboard,
  //   page: 'dashboard'
  // })
  // React.useEffect(() => setDashboard(data), [data])

  const { data, error } = useSWR(url, fetcher, {
    initialData: dashboard,
    refreshInterval: 1000
  })
  React.useEffect(() => {
    if (data) setDashboard(data)
  }, [data])

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <Grid container spacing={2}>
        <Grid item sx={{ display: 'flex' }} xs={12} lg>
          <Widget link={`/${props.aps}/overview`} title={t('system-title')}>
            <Devices devices={system.devices} aps={props.aps} />
          </Widget>
        </Grid>
        <Grid item sx={{ display: 'flex' }} xs={12} lg>
          <Widget link={`/${props.aps}/history`} title={t('activity-title')}>
            <Activity activity={activity} />
          </Widget>
        </Grid>
        <Grid item sx={{ display: 'flex' }} xs={12} lg>
          <Widget link={`/${props.aps}/map`} title={t('occupancy-title')}>
            {/* <QueueList
              queue={system.exitQueue.queueList}
              onDelete={props.onDelete}
            /> */}
            <Occupancy
              data={[
                occupancy[0].value,
                occupancy[1].value,
                occupancy[2].value
              ]}
              labels={[t('busy'), t('free'), t('lock')]}
              height={300}
              width={300}
            />
          </Widget>
        </Grid>
        {/* <Grid item sx={{ display: 'flex' }} xs={12} lg>
          <Widget link={`/${props.aps}/map`} title={t('occupancy-title')}>
            <QueueList
              queue={system.exitQueue.queueList}
              onDelete={props.onDelete}
            />
          </Widget>
        </Grid> */}
        {dailyOperations.data.length > 0 && (
          <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Widget
              link={`/${props.aps}/statistics`}
              title={t('operations-title')}
            >
              <Operations
                height={'40%'}
                width={'100%'}
                data={dailyOperations.data}
                labels={[t('entries'), t('exits'), t('total')]}
                // title={`${t(dailyOperations.i18n)}: ${dailyOperations.label}`}
              />
            </Widget>
          </Grid>
        )}
      </Grid>

      {/* <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
        <Grid container spacing={2}>
          <Grid item>
            <Widget link={`/${props.aps}/overview`} title={t('system-title')}>
              <DeviceTable data={system.devices} />
            </Widget>
          </Grid>
          <Grid item>
            <Widget link={`/${props.aps}/overview`} title={t('queue-title')}>
              <QueueList
                queue={system.exitQueue.queueList}
                onDelete={props.onDelete}
              />
            </Widget>
          </Grid>
          <Grid item>
            <Widget link={`/${props.aps}/map`} title={t('occupancy-title')}>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Parking spaces {system.definitions.stalls}
              </Typography>
              <Occupancy
                data={[
                  occupancy[0].value,
                  occupancy[1].value,
                  occupancy[2].value
                ]}
                labels={[t('busy'), t('free'), t('lock')]}
                height={300}
                width={300}
              />
            </Widget>
          </Grid>
          <Grid item>
            <Widget link={`/${props.aps}/cards`} title={t('cards-title')}>
              Total cards {cards}
            </Widget>
          </Grid>
          <Grid item>
            <Widget link={`/${props.aps}/history`} title={t('activity-title')}>
              Logs
            </Widget>
          </Grid>
          {dailyOperations.data.length > 0 && (
            <Grid item xs={12}>
              <Widget
                link={`/${props.aps}/statistics`}
                title={t('operations-title')}
              >
                <Operations
                  height={'40%'}
                  width={'100%'}
                  data={dailyOperations.data}
                  labels={[t('entries'), t('exits'), t('total')]}
                  // title={`${t(dailyOperations.i18n)}: ${dailyOperations.label}`}
                />
              </Widget>
            </Grid>
          )}
        </Grid>
      </Box> */}
    </Layout>
  )
}
