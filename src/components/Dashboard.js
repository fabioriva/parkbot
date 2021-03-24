import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Error from 'src/components/Error'
import Layout from 'src/components/Layout'
import Activity from 'src/components/history/RecentActivity'
import Occupancy from 'src/components/map/PieChart'
import Operations from 'src/components/statistics/BarChart'
import useData from 'src/lib/useData'

// material-ui
import Grid from '@material-ui/core/Grid'

// import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import BuildIcon from '@material-ui/icons/Build'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import FaceIcon from '@material-ui/icons/Face'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const system = [
  { name: 'EVT1', status: 5, label: 'Exiting', card: 123 },
  { name: 'EVT2', status: 1, label: 'Ready', card: 0 },
  { name: 'EVT3', status: 0, label: 'manual', card: 0 },
  { name: 'IVT4', status: 4, label: 'Entering', card: 7 },
  { name: 'IVT4', status: 3, label: 'Error', card: 55 }
]

// const occupancy = [
//   { id: 'free', label: 'Free', value: 87 },
//   { id: 'busy', label: 'Busy', value: 7 },
//   { id: 'lock', label: 'Locked', value: 6 }
// ]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // direction: 'column',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  widget: {
    minWidth: 275
    // minHeight: 300
  }
  // title: {
  //   fontSize: 14
  // },
}))

function Widget ({ children, link, title }) {
  const classes = useStyles()

  return (
    <Card className={classes.widget}>
      <CardContent>
        <Typography
          className={classes.title}
          variant='h6'
          component='h2'
          // color='textPrimary'
          gutterBottom
        >
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

function chipColor (item) {
  switch (item.status) {
    case 0:
      return 'secondary'
    default:
      return 'default'
  }
}

function chipIcon (item) {
  switch (item.status) {
    case 0:
      return <BuildIcon />
    case 1:
      return <CheckCircleOutlineIcon />
    case 3:
      return <ErrorOutlineIcon />
    default:
      return <DriveEtaIcon />
  }
  return <FaceIcon />
}

function chipLabel (item) {
  return item.card === 0 ? (
    <span>
      <strong>{item.name}</strong> is {item.label}
    </span>
  ) : (
    <span>
      <strong>{item.name}</strong> is {item.label} card {item.card}
    </span>
  )
}

export default function Cards ({ definitions, json, user }) {
  const classes = useStyles()
  const { t } = useTranslation('common')

  const { apsName, backendUrl, websockUrl } = definitions

  console.log(json)

  // const lang =
  //   user.locale === 'en-US' ? 'en' : user.locale === 'it-IT' ? 'it' : 'en'

  if (json.err) {
    return (
      <Error
        definitions={definitions}
        message='Error 500'
        title={t('title-dashboard')}
        user={user}
      />
    )
  }

  const { data, isLoading, isError } = useData(`${backendUrl}/dashboard`, {
    initialData: json,
    refreshInterval: 1000
  })

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  console.log(data)

  return (
    <Layout
      apsName={apsName}
      pageTitle={t('title-dashboard')}
      socket={`${websockUrl}?channel=ch2`}
      user={user}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Widget title='System Info' link={`/${user.aps}/overview`}>
            <Typography variant='body1' gutterBottom>
              Total cards {data.cards}
            </Typography>
            <div className={classes.root}>
              {system.map((item, key) => (
                <Chip
                  key={key}
                  // avatar={<Avatar>{item.name}</Avatar>}
                  color={chipColor(item)}
                  icon={chipIcon(item)}
                  label={chipLabel(item)}
                  // style={{ backgroundColor: 'green' }}
                />

                // <Grid container spacing={1} key={key}>
                //   <Grid item xs={6}>
                //     <Typography variant='body1'>{item.name}</Typography>
                //   </Grid>
                //   <Grid item xs={6}>
                //     <Chip
                //       // avatar={<Avatar>{item.name}</Avatar>}
                //       label={
                //         item.card === 0 ? (
                //           item.status
                //         ) : (
                //           <span>
                //             {item.status} {item.card}
                //           </span>
                //         )
                //       }
                //     />
                //     {/* <Typography variant='body1'>
                //       {item.card === 0 ? (
                //         item.status
                //       ) : (
                //         <span>
                //           {item.status} {item.card}
                //         </span>
                //       )}
                //     </Typography> */}
                //   </Grid>
                // </Grid>
              ))}
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title='Recent Activity' link={`/${user.aps}/history`}>
            <Activity query={data.activity.documents} user={user} />
          </Widget>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Widget title='Cards' link={`/${user.aps}/cards`}>
            Total cards {data.cards}
          </Widget>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Widget title='Occupancy' link={`/${user.aps}/map`}>
            <Occupancy data={data.occupancy} />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title='Operations' link={`/${user.aps}/statistics`}>
            <Operations data={data.operations[1]} />
          </Widget>
        </Grid>

        {/* <Grid item xs={12} md={6}>
          PN network
        </Grid> */}
      </Grid>
    </Layout>
  )
}
