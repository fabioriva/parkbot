import React from 'react'
import useData from 'src/lib/useData'
import useTranslation from 'next-translate/useTranslation'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import Activity from 'src/components/history/RecentActivity'
import DeviceList from 'src/components/system/DeviceList'
import Queue from 'src/components/system/Queue'
import Occupancy from 'src/components/map/PieChart'
import Operations from 'src/components/statistics/BarChart'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex'
  },
  widget: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%'
  }
}))

function Widget ({ children, link, title }) {
  const classes = useStyles()

  return (
    <Card className={classes.widget}>
      <CardContent>
        <Typography variant='h6' component='h2' gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
      <CardActions>
        <Button size='small' href={link}>
          More
        </Button>
      </CardActions>
    </Card>
  )
}

export default function Dashboard (props) {
  const classes = useStyles()
  const { t } = useTranslation()
  const { definitions, json, user } = props

  if (json.err) {
    return <Error {...props} message='Error 500' />
  }

  const [dashboard, setDashboard] = React.useState(json)

  const { data } = useData(`${definitions.backendUrl}/dashboard`, {
    initialData: dashboard,
    refreshInterval: 1000
  })

  React.useEffect(() => setDashboard(data), [data])

  const handleDelete = async ({ card, index }) => {
    console.log(card, index)
    // const json = await fetchJson(`${backendUrl}/system/queue/delete`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ card, index })
    // })
    // const snack = message(json)
    // enqueueSnackbar(snack.message, snack.options)
  }

  return (
    <Layout {...props}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item className={classes.gridItem} xs={12} lg>
              <Widget title='System Info' link={`/${user.aps}/overview`}>
                <DeviceList devices={dashboard.system.devices} />
              </Widget>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} lg>
              <Widget title='Exit Queue' link={`/${user.aps}/overview`}>
                <Queue
                  authorization={false}
                  handleDelete={handleDelete}
                  queueList={dashboard.system.exitQueue.queueList}
                />
              </Widget>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} lg={6}>
              <Widget title='Occupancy' link={`/${user.aps}/map`}>
                <Occupancy data={dashboard.occupancy} />
              </Widget>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item className={classes.gridItem} xs={12} lg={6}>
              <Widget title='Recent Activity' link={`/${user.aps}/history`}>
                <Activity data={dashboard.activity} user={user} />
              </Widget>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} lg={6}>
              <Widget title='Operations' link={`/${user.aps}/statistics`}>
                <Operations data={dashboard.operations[0]} />
              </Widget>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
