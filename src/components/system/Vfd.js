import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Bit from './Bit'
import Item from './Item'
import Lamp from './Lamp'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
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

export default function Vfd ({ item, operation }) {
  const classes = useStyles()
  const { t } = useTranslation('system')
  // const { operation } = device.a

  const name = 'Drive ' + item.name
  const vfd = (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Item title={t('vfd-status')} value={(item.status >>> 0).toString(2)} />
      </Grid>
      <Grid item xs={6}>
        <Bit bit={item.enabled} />
      </Grid>
      <Grid item xs={6}>
        <Item
          title={t('vfd-speed')}
          value={item.speed !== 0 ? item.speed + ' Hz' : '---'}
        />
      </Grid>
      <Grid item xs={6}>
        <Item
          title={t('vfd-current')}
          value={item.current !== 0 ? item.current + ' A' : '---'}
        />
      </Grid>
      <Grid item xs={6}>
        <Item
          title={t('vfd-load')}
          value={item.load !== 0 ? item.load + ' %' : '---'}
        />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('vfd-trip')} value={item.trip} />
      </Grid>
    </Grid>
  )

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={[
          <Lamp key='0' item={item.online} on='readyOn' off='readyOff' />
        ]}
        title={name}
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
      </CardContent>
    </Card>
  )
}
