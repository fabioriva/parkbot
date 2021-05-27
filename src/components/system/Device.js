import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { ACTIONS, DIAGNOSTIC } from 'src/constants/roles'
import { isAllowed } from 'src/lib/auth-actions'
import Info from './Info'
import Item from './Item'
import Lamp from './Lamp'
import Mode from './Mode'
import Silomat from './Silomat'
// import Alarms from 'src/components/alarms/AlarmsList'
// material-ui
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
// import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
// material-ui icons
// import BuildIcon from '@material-ui/icons/Build'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
// import InfoIcon from '@material-ui/icons/Info'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    width: '100%'
    // maxWidth: 345
  },
  cardHeader: {
    backgroundColor: '#c0c0c0',
    padding: '16px'
  },
  cardHeaderTitle: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  cardContent: {
    // padding: theme.spacing(2)
  },
  ce: {
    backgroundColor: theme.palette.ce // '#d4edda',
  },
  cu: {
    backgroundColor: theme.palette.cu // '#f8d7da',
  },
  pp: {
    backgroundColor: theme.palette.pp // '#d1ecf1',
  },
  button: {
    marginLeft: 'auto'
  }
}))

export default function Device ({ actions, authorization, item, user }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const { id, name, card, mode, motor, operation, size, stall, step } = item.a

  const device = (
    <Grid container>
      <Grid item xs={6}>
        <Item
          title={t('system:device-mode')}
          value={t(`system:${mode.label}`)}
        />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('system:device-card')} value={card} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('system:device-size')} value={size} />
      </Grid>
      <Grid item xs={6}>
        <Item title={t('system:device-dest')} value={stall} />
      </Grid>
      {item.b.map((item, key) => (
        <Grid item key={key} xs={6}>
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

  const locale = user.locale !== undefined ? user.locale : 'en'

  // const [expanded, setExpanded] = React.useState(false)

  // const handleExpandClick = () => {
  //   setExpanded(!expanded)
  // }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<Mode mode={mode} step={step} />}
        action={[
          <Info key='6' item={item.c[3]}>
            <DirectionsCarIcon />
          </Info>,
          <Info key='5' item={item.c[4]}>
            <SettingsBackupRestoreIcon />
          </Info>,
          <Info key='4' item={item.c[5]}>
            <SwapHorizIcon />
          </Info>,
          <Lamp key='3' item={item.c[2]} on='alarmOn' off='alarmOff' />,
          <Lamp key='2' item={item.c[1]} on='centerOn' off='centerOff' />,
          <Lamp key='1' item={item.c[0]} on='readyOn' off='readyOff' />
          // <IconButton key='0' aria-label='active'>
          //   <Badge
          //     badgeContent={item.alarms !== undefined ? item.alarms.length : 0}
          //     color='secondary'
          //   >
          //     <NotificationsActiveIcon />
          //   </Badge>
          // </IconButton>
        ]}
        title={name}
        subheader={`Device ${id}`}
        classes={{
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true,
          [classes.ce]: operation === 1,
          [classes.cu]: operation === 2,
          [classes.pp]: operation === 3
        })}
      >
        {motor === 0 ? device : <Silomat data={item.e} />}
      </CardContent>
      {/* {item.d.length > 0 && ( */}
      <CardActions disableSpacing>
        {item.d.map((item, key) => (
          <Button
            // size='small'
            color='primary'
            disabled={!isAllowed(user, [ACTIONS]) || !item.enable.status}
            key={key}
            onClick={
              () => actions[key] !== undefined && actions[key](id) //, item.write)
            }
          >
            {t('system:' + item.label)}
          </Button>
        ))}

        <Link href={`/${user.aps}/device/${id - 1}`} locale={locale}>
          <Button
            color='primary'
            // className={classes.button}
            disabled={!isAllowed(user, [DIAGNOSTIC])}
            // startIcon={<InfoIcon />}
          >
            More
          </Button>
        </Link>
        <Link href={`/${user.aps}/alarms/${id - 1}`} locale={locale}>
          <IconButton
            key='0'
            aria-label='active'
            className={classes.button}
            // onClick={handleExpandClick}
            // aria-expanded={expanded}
          >
            <Badge badgeContent={item.alarms.length} color='secondary'>
              <NotificationsActiveIcon />
            </Badge>
          </IconButton>
        </Link>
      </CardActions>
      {/* )} */}
      {/* <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Alarms alarms={item.alarms} />
        </CardContent>
      </Collapse> */}
    </Card>
  )
}
