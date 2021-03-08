import React from 'react'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Bit from './Bit'
import Item from './Item'
import Diag from './DiagList'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import Badge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
// material-ui icons
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'
import WarningIcon from '@material-ui/icons/Warning'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    // transform: 'rotate(180deg)'
  },
  op: {
    backgroundColor: theme.palette.op
  }
}))

export default function Actuator ({ item }) {
  const classes = useStyles()
  const { t } = useTranslation('system')
  // console.log(motor)
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

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
      <Grid item xs={6} className={classes.lamp}>
        <Bit bit={item.m1} />
      </Grid>
      <Grid item xs={6} className={classes.lamp}>
        <Bit bit={item.m2} />
      </Grid>
      <Grid item xs={6} className={classes.lamp}>
        <Bit bit={item.p1} />
      </Grid>
      <Grid item xs={6} className={classes.lamp}>
        <Bit bit={item.p2} />
      </Grid>
    </Grid>
  )
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={
          isMoving ? (
            <OfflineBoltIcon style={{ color: yellow[500] }} />
          ) : (
            <OfflineBoltIcon color='disabled' />
          )
        }
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
        {/* <Diag active={item.active} /> */}
      </CardContent>
      <CardActions disableSpacing>
        {item.active.length > 0 && (
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <Badge badgeContent={item.active.length} color='secondary'>
              <WarningIcon />
            </Badge>
          </IconButton>
        )}
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Diag active={item.active} />
        </CardContent>
      </Collapse>
    </Card>
  )
}
