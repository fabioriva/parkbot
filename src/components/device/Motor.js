import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Item from '../system/Item'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// material-ui icons
import LensIcon from '@material-ui/icons/Lens'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    maxWidth: 345
  },

  lamp: {
    // border: '1px solid #000',
    // padding: theme.spacing(1),
    textAlign: 'center'
    // verticalAlign: 'middle'
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  on: {
    backgroundColor: yellow[600]
  },
  off: {
    backgroundColor: yellow[50]
  }
}))

export default function Motor (props) {
  const { t } = useTranslation('system')
  const classes = useStyles()
  const { motor } = props
  // console.log(motor)
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {motor.name}
          </Typography>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='stretch'
            spacing={0}
          >
            <Grid item xs={6}>
              <Item title={t('motion')} value={t(`system:${motor.motion}`)} />
            </Grid>
            <Grid
              item
              xs={3}
              className={clsx(classes.lamp, {
                [classes.on]: motor.m1.status,
                [classes.off]: !motor.m1.status
              })}
            >
              <Typography variant='caption'>{motor.m1.label}</Typography>
              <Typography variant='overline' display='block'>
                {motor.m1.addr}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              className={clsx(classes.lamp, {
                [classes.on]: motor.m2.status,
                [classes.off]: !motor.m2.status
              })}
            >
              <Typography variant='caption'>{motor.m2.label}</Typography>
              <Typography variant='overline' display='block'>
                {motor.m2.addr}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Item
                title={t('position')}
                value={t(`system:${motor.position}`)}
              />
            </Grid>
            <Grid
              item
              xs={3}
              className={clsx(classes.lamp, {
                [classes.on]: motor.p1.status,
                [classes.off]: !motor.p1.status
              })}
            >
              <Typography variant='caption'>{motor.p1.label}</Typography>
              <Typography variant='overline' display='block'>
                {motor.p1.addr}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              className={clsx(classes.lamp, {
                [classes.on]: motor.p2.status,
                [classes.off]: !motor.p2.status
              })}
            >
              <Typography variant='caption'>{motor.p2.label}</Typography>
              <Typography variant='overline' display='block'>
                {motor.p2.addr}
              </Typography>
            </Grid>
          </Grid>
          {motor.active.map((item, key) => (
            <Typography
              key={key}
              variant='overline'
              display='block'
              gutterBottom
            >
              {item.date}: {item.mesg}
            </Typography>
          ))}
        </CardContent>
      </Card>
      {/* <Box
        display='flex'
        justifyContent='space-between'
        // bgcolor='background.paper'
      >
        <Chip
          icon={
            <LensIcon
              className={clsx({
                [classes.on]: motor.p1.status,
                [classes.off]: !motor.p1.status
              })}
            />
          }
          label={motor.p1.addr + ' ' + motor.p1.label}
          variant='outlined'
        />
        <Chip
          icon={
            <LensIcon
              className={clsx({
                [classes.on]: motor.p2.status,
                [classes.off]: !motor.p2.status
              })}
            />
          }
          label={motor.p2.addr + ' ' + motor.p2.label}
          variant='outlined'
        />
        <Chip
          icon={
            <LensIcon
              className={clsx({
                [classes.on]: motor.m1.status,
                [classes.off]: !motor.m1.status
              })}
            />
          }
          label={motor.m1.addr + ' ' + motor.m1.label}
          variant='outlined'
        />
        <Chip
          icon={
            <LensIcon
              className={clsx({
                [classes.on]: motor.m2.status,
                [classes.off]: !motor.m2.status
              })}
            />
          }
          label={motor.m1.addr + ' ' + motor.m2.label}
          variant='outlined'
        />
      </Box>

      <ul>
        <li>{motor.name}</li>
        <li>{motor.motion}</li>
        <li>{motor.position}</li>
        <ul>
          {motor.active.map(item => (
            <li>
              {item.date}: {item.mesg}
            </li>
          ))}
        </ul>
        <li>
          {motor.p1.addr} = {motor.p1.status}
        </li>
        <li>
          {motor.p2.addr} = {motor.p2.status}
        </li>
        <li>
          {motor.m1.addr} = {motor.m1.status}
        </li>
        <li>
          {motor.m2.addr} = {motor.m2.status}
        </li>
        <li>
          {motor.enb.addr} = {motor.enb.status}
        </li>
        <li>
          {motor.bwd.addr} = {motor.bwd.status}
        </li>
        <li>
          {motor.fwd.addr} = {motor.fwd.status}
        </li>
      </ul> */}
    </>
  )
}
