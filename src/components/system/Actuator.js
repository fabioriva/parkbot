import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Bit from './Bit'
import Item from './Item'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// material-ui icons
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'

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
  moving: {
    backgroundColor: theme.palette.pp // '#d4edda',
  }
}))

export default function Actuator ({ item }) {
  const classes = useStyles()
  const { t } = useTranslation('system')
  // console.log(motor)
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
          [classes.moving]: isMoving
        })}
      >
        {motor}
        {/* <Typography variant='h5' gutterBottom>
            {motor.m1.status || motor.m2.status ? (
              <span>{t(motor.name)}</span>
            ) : (
              <span>{t(motor.name)} ⚡</span>
            )}
          </Typography> */}

        {item.active.map((item, key) => (
          <Typography key={key} variant='overline' display='block' gutterBottom>
            {item.date}: {item.mesg}
          </Typography>
        ))}
      </CardContent>
    </Card>
  )
}
