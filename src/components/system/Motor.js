import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Bit from './Bit'
import Item from './Item'
import Lamp from './Lamp'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    maxWidth: 345
  },
  cardHeader: {
    backgroundColor: '#c0c0c0',
    padding: '4px 16px'
  },
  cardHeaderAction: {
    margin: 0
  },
  cardHeaderTitle: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  cardContent: {
    padding: theme.spacing(2)
  },
  ce: {
    backgroundColor: theme.palette.ce // '#d4edda',
  },
  cu: {
    backgroundColor: theme.palette.cu // '#f8d7da',
  },
  pp: {
    backgroundColor: theme.palette.pp // '#d1ecf1',
  }
}))

export default function Actuator ({ item }) {
  const classes = useStyles()
  const { t } = useTranslation('system')

  const { inverter, position } = item

  const name = item.name
  const laser = (
    <Grid container>
      <Grid item xs={6}>
        <Item title={t('motion')} value={t(item.motion)} />
      </Grid>
      <Grid item xs={6}>
        <Item
          title={position.name}
          value={
            <span>
              {position.position}&nbsp;&rarr;&nbsp;{position.destination}
            </span>
          }
        />
      </Grid>
    </Grid>
  )

  const vfd = (
    <Grid container>
      <Grid item xs={6}>
        <Item
          title={t('vfd-status')}
          value={(inverter.status >>> 0).toString(2)}
        />
      </Grid>
      <Grid item xs={6}>
        <Bit bit={inverter.enabled} />
      </Grid>
      <Grid item xs={6}>
        <Item
          title={t('vfd-speed')}
          value={inverter.speed !== 0 ? inverter.speed + ' Hz' : '---'}
        />
      </Grid>
      <Grid item xs={6}>
        <Item
          title={t('vfd-current')}
          value={inverter.current !== 0 ? inverter.current + ' A' : '---'}
        />
      </Grid>
      {/* <Grid item xs={6}>
        <Item
          title={t('vfd-load')}
          value={inverter.load !== 0 ? inverter.load + ' %' : '---'}
        />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('vfd-trip')} value={inverter.trip} />
      </Grid> */}
    </Grid>
  )

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={[
          <Lamp key='0' item={inverter.online} on='readyOn' off='readyOff' />
        ]}
        title={t(name)}
        // subheader='Inverter'
        classes={{
          action: classes.cardHeaderAction,
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true
          // [classes.ce]: operation === 1,
          // [classes.cu]: operation === 2,
          // [classes.pp]: operation === 3
        })}
      >
        {vfd}
        {laser}
      </CardContent>
    </Card>
  )
}
