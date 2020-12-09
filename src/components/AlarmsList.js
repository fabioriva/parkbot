import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
// import WarningIcon from '@material-ui/icons/Warning'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%'
  },
  danger: {
    backgroundColor: '#f2dede',
    color: '#a94442',
    fontSize: 14
  }
}))

export default function UserActivity ({ alarms }) {
  const classes = useStyles()
  console.log(alarms)
  return (
    <List className={classes.root} dense>
      {
        alarms !== undefined &&
        alarms
          .map((item, key) =>
            <ListItem
              key={key}
              alignItems='flex-start'
              button
            >
              <ListItemAvatar>
                <Avatar className={classes.danger}>
                  <PriorityHighIcon />
                  {/* {item.label} */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.label}
                secondary={item.date}
              />
              {/* <Hidden xsDown>
                <ListItemSecondaryAction>
                  <div>{formatDistance(new Date(item.date), new Date(), { addSuffix: true })}</div>
                </ListItemSecondaryAction>
              </Hidden> */}
            </ListItem>
          )
      }
    </List>
  )
}
