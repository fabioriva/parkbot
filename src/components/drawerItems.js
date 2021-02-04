import React from 'react'
// import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
// import Badge from '@material-ui/core/Badge'
// import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import ListSubheader from '@material-ui/core/ListSubheader';
import BarChartIcon from '@material-ui/icons/BarChart'
import CreditCardIcon from '@material-ui/icons/CreditCard'
// import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import HistoryIcon from '@material-ui/icons/History'
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import VisibilityIcon from '@material-ui/icons/Visibility'
// import ExpandLess from '@material-ui/icons/ExpandLess'
// import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

export function mainListItems (diag, user) {
  const classes = useStyles()
  // const { locale } = useRouter()
  const { t, lang } = useTranslation('common')

  // const [open, setOpen] = React.useState(false)
  // const handleClick = () => {
  //   setOpen(!open)
  // }

  return (
    <List>
      <Link href={`/${user.aps}/system`} locale={lang}>
        <ListItem button>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary={t('title-system')} />
        </ListItem>
      </Link>

      <Link href={`/${user.aps}/map`} locale={lang}>
        <ListItem button>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={t('title-map')} />
        </ListItem>
      </Link>

      <Link href={`/${user.aps}/cards`} locale={lang}>
        <ListItem button>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary={t('title-cards')} />
        </ListItem>
      </Link>

      <Link href={`/${user.aps}/racks`} locale={lang}>
        <ListItem button>
          <ListItemIcon>
            <ViewComfyIcon />
          </ListItemIcon>
          <ListItemText primary={t('title-racks')} />
        </ListItem>
      </Link>

      <Link href={`/${user.aps}/history`} locale={lang}>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={t('title-history')} />
        </ListItem>
      </Link>

      <Link href={`/${user.aps}/statistics`} locale={lang}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={t('title-statistics')} />
        </ListItem>
      </Link>
    </List>
  )
}
