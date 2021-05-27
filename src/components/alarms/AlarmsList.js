import useTranslation from 'next-translate/useTranslation'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import Typography from '@material-ui/core/Typography'
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
// import { deepOrange, deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  listItem: {
    // paddingLeft: 0
  },
  avatar: {
    // color: theme.palette.getContrastText(deepOrange[500]),
    // backgroundColor: deepOrange[500],
    fontSize: 12,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main)
  }
  // purple: {
  //   color: theme.palette.getContrastText(deepPurple[500]),
  //   backgroundColor: deepPurple[500]
  // }
}))

// function dt (date) {
//   const dt = date.split(' ')
//   return (
//     <span style={{ textAlign: 'right' }}>
//       <div>{dt[0]}</div>
//       <div>{dt[1]}</div>
//     </span>
//   )
// }

export default function AlarmsList (props) {
  const classes = useStyles()
  const { t } = useTranslation('alarms')

  return (
    <List>
      {props.alarms.map((item, key) => (
        <ListItem key={key} className={classes.listItem}>
          {/* <ListItemIcon>
              <ErrorOutlineIcon />
            </ListItemIcon> */}
          <ListItemAvatar>
            <Avatar className={classes.avatar}>{item.label}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.date}
            secondary={t(item.i18n.key, item.i18n.query)}
            // primary={
            //   <>
            //     <Typography color='error'>{item.label}</Typography>
            //     {item.date}
            //   </>
            // }
            // secondary={
            //   <>
            //     <Typography color='textPrimary'>
            //       {/* {item.info.length > 0 ? t(item.info) : '---'} */}
            //       {item.i18n !== undefined && t(item.i18n.key, item.i18n.query)}
            //     </Typography>
            //   </>
            // }
          />
          {/* <ListItemSecondaryAction>{dt(item.date)}</ListItemSecondaryAction> */}
        </ListItem>
      ))}
    </List>
  )
}
