import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import ListSubheader from '@material-ui/core/ListSubheader';
import BarChartIcon from '@material-ui/icons/BarChart'
// import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import HistoryIcon from '@material-ui/icons/History'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

export function mainListItems (diag, user) {
  const classes = useStyles()
  const { t } = useTranslation(['common'])

  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List>
      <Link href={`/${user.aps}/system`}>
        <ListItem button>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary={t('system')} />
        </ListItem>
      </Link>
      <Link href={`/${user.aps}/map`}>
        <ListItem button>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={t('map')} />
        </ListItem>
      </Link>
      <Link href={`/${user.aps}/racks`}>
        <ListItem button>
          <ListItemIcon>
            <ViewComfyIcon />
          </ListItemIcon>
          <ListItemText primary={t('racks')} />
        </ListItem>
      </Link>
      {/* <Link href={`/${user.aps}/alarms`}> */}
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Badge badgeContent={diag.count} color='secondary'>
            <NotificationsActiveIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary={t('alarms')} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Link href={`/${user.aps}/alarms`}>
            <ListItem button className={classes.nested}>
              {/* <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon> */}
              <ListItemText primary='AL1' />
            </ListItem>
          </Link>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <ErrorOutlineIcon />
            </ListItemIcon> */}
            <ListItemText primary='AL2' />
          </ListItem>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <ErrorOutlineIcon />
            </ListItemIcon> */}
            <ListItemText primary='AL3' />
          </ListItem>
        </List>
      </Collapse>
      {/* </Link> */}
      <Link href={`/${user.aps}/history`}>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={t('history')} />
        </ListItem>
      </Link>
      <Link href={`/${user.aps}/statistics`}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={t('statistics')} />
        </ListItem>
      </Link>
    </List>
  )
}
