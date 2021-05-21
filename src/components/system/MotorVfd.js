import React from 'react'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Bit from './Bit'
import Item from './Item'
import Motion from './Motion'
import Diag from './DiagActions'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
// material-ui icons
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    // marginBottom: theme.spacing(3),
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
    backgroundColor: theme.palette.ce // #d4edda
  },
  cu: {
    backgroundColor: theme.palette.cu // #f8d7da
  },
  pp: {
    backgroundColor: theme.palette.pp // #d1ecf1
  },
  op: {
    backgroundColor: theme.palette.op // #fff3cd
  }
}))

export default function Actuator ({ item }) {
  const classes = useStyles()
  const { t } = useTranslation('system')

  const { inverter, position } = item
  const isMoving = inverter.speed !== 0

  const name = item.name
  const laser = (
    <Grid container spacing={1}>
      {position.map((item, key) => (
        <Grid item xs={6} key={key}>
          <Item
            title={item.name}
            value={
              <span>
                {item.position}&nbsp;&rarr;&nbsp;{item.destination}
              </span>
            }
          />
        </Grid>
      ))}
    </Grid>
  )

  const inputs = item.inputs.map((bit, key) => (
    <Grid item xs={4} className={classes.lamp} key={key}>
      <Bit bit={bit} />
    </Grid>
  ))

  const outputs = item.outputs.map((bit, key) => (
    <Grid item xs={4} className={classes.lamp} key={key}>
      <Bit bit={bit} />
    </Grid>
  ))

  const vfd = (
    <Grid container spacing={1}>
      {/* <Grid item xs={6}>
        <Item
          title={t('vfd-status')}
          value={(inverter.status >>> 0).toString(2)}
        />
      </Grid>
      <Grid item xs={6}>
        <Bit bit={inverter.enabled} />
      </Grid> */}
      <Grid item xs={6}>
        <Item title={t('motion')} value={t(item.motion)} />
      </Grid>
      <Grid item xs={3}>
        <Item
          title={t('vfd-speed')}
          value={inverter.speed !== 0 ? inverter.speed + ' Hz' : '---'}
        />
      </Grid>
      <Grid item xs={3}>
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
        action={<Motion motion={isMoving} />}
        title={t(name)}
        // subheader='Inverter'
        classes={{
          action: classes.cardHeaderAction,
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true,
          [classes.op]: isMoving
        })}
      >
        {vfd}
        {laser}
        <Grid container spacing={1}>
          {inputs}
          {outputs}
        </Grid>
      </CardContent>
      <Diag active={item.active} />
      {/* <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          {(item.inputs.length > 0 || item.outputs.length > 0) && (
            <Grid container spacing={1}>
              {inputs}
              {outputs}
            </Grid>
          )}
        </CardContent>
      </Collapse> */}
    </Card>
  )
}