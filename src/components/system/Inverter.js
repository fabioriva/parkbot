import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
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
    // marginBottom: theme.spacing(3),
    maxWidth: 345
  },
  cardHeader: {
    // backgroundColor: '#c0c0c0',
    padding: '8px 16px'
  },
  cardHeaderAction: {
    margin: 0
  },
  cardHeaderTitle: {
    // fontSize: '16px',
    // fontWeight: 'bold'
  },
  cardContent: {
    padding: theme.spacing(2)
  },
  pp: {
    backgroundColor: theme.palette.pp // '#d1ecf1',
  }
}))

export default function Inverter (props) {
  const classes = useStyles()
  const { t } = useTranslation('system')
  // console.log(props)

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={[
          <Lamp key='0' item={props.enable} on='readyOn' off='readyOff' />
        ]}
        title={props.name}
        // subheader='Inverter'
        classes={{
          action: classes.cardHeaderAction,
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true,
          // [classes.ce]: operation === 1,
          // [classes.cu]: operation === 2,
          [classes.pp]: props.speed !== 0 // [classes.pp]: operation === 3
        })}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item
              title={t('vfd-speed')}
              value={props.speed !== 0 ? props.speed + ' Hz' : '---'}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-current')}
              value={props.current !== 0 ? props.current + ' A' : '---'}
            />
          </Grid>
          <Grid item xs={6}>
            <Item
              title={t('vfd-load')}
              value={props.load !== 0 ? props.load + ' %' : '---'}
            />
          </Grid>
          <Grid item xs={6}>
            <Item title={t('vfd-trip')} value={props.trip} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
