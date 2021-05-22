// import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Item from './Item'
import Lamp from './Lamp'
import Widget from './Widget'
// material-ui
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles(theme => ({
//   root: {}
// }))

export default function Inverter (props) {
  // const classes = useStyles()
  const { t } = useTranslation('system')
  // console.log(props)

  return (
    <Widget
      action={[
        <Lamp key='0' item={props.enable} on='readyOn' off='readyOff' />
      ]}
      motion={props.speed !== 0}
      title={props.name}
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
    </Widget>
  )
}
