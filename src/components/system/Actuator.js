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

const useStyles = makeStyles(theme => ({
  root: {
    // marginBottom: theme.spacing(3),
    maxWidth: 345
  },
  cardHeader: {
    backgroundColor: '#c0c0c0',
    padding: '8px 16px'
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
  op: {
    backgroundColor: theme.palette.op
  }
}))

export default function Actuator ({ item }) {
  const classes = useStyles()
  const { t } = useTranslation('system')

  const name = item.name
  const isMoving = Boolean(item.m1.status || item.m2.status)
  const motor = (
    <Grid
      container
      // direction='row'
      // justify='center'
      // alignItems='center'
      spacing={1}
    >
      <Grid item xs={6}>
        <Item title={t('motion')} value={t(`system:${item.motion}`)} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('position')} value={t(`system:${item.position}`)} />
      </Grid>
      <Grid item xs={3} className={classes.lamp}>
        <Bit bit={item.m1} />
      </Grid>
      <Grid item xs={3} className={classes.lamp}>
        <Bit bit={item.m2} />
      </Grid>
      <Grid item xs={3} className={classes.lamp}>
        <Bit bit={item.p1} />
      </Grid>
      <Grid item xs={3} className={classes.lamp}>
        <Bit bit={item.p2} />
      </Grid>
    </Grid>
  )

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={<Motion motion={isMoving} />}
        title={t(name)}
        // subheader={t('motor')}
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
        {motor}
      </CardContent>
      <Diag active={item.active} />
    </Card>
  )
}
