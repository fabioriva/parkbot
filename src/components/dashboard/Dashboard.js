import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Layout from 'src/components/Layout'
import DeviceTable from 'src/components/dashboard/DeviceTable'
import Widget from 'src/components/dashboard/Widget'
import Occupancy from 'src/components/charts/Occupancy'
import Operations from 'src/components/charts/Operations'
import QueueList from 'src/components/overview/QueueList'
// import { useData } from 'src/lib/useWebSocket'

export default function Dashboard (props) {
  const { t } = useTranslation('dashboard')
  console.log(props)

  const [dashboard, setDashboard] = React.useState(props.json)

  const { cards, occupancy, operations, system } = dashboard

  const dailyOperations = operations[2]

  // const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/dashboard`
  // const { data } = useData(url, {
  //   initialData: dashboard,
  //   page: 'dashboard'
  // })
  // React.useEffect(() => setDashboard(data), [data])

  return (
    <Layout {...props} pageTitle={t('header-title')}>
      <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
        <Grid container spacing={2}>
          <Grid item>
            <Widget link={`/${props.aps}/overview`} title={t('system-title')}>
              {/* <Stack direction='row' spacing={1}>
                {system.devices.map((e, i) => (
                  <Chip
                    label={t(`common:${e.a.mode.label}`)}
                    color={e.a.mode.id === 8 ? 'primary' : 'warning'}
                    // size='small'
                    avatar={<Avatar>{e.a.name}</Avatar>}
                    // key={i}
                  />
                ))}
              </Stack> */}
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
      </Box>
    </Layout>
  )
}
