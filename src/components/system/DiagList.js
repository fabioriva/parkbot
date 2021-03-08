import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// material-ui icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

const useStyles = makeStyles(theme => ({
  diag: {
    marginTop: theme.spacing(1),
    // padding: theme.spacing(1),
    border: '1px solid #f5c6cb',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    fontSize: 8
  },
  listItemText: {
    // fontSize: 12
  }
}))

export default function Diag ({ active }) {
  const classes = useStyles()
  console.log(active)
  return (
    <>
      {active.length > 0 && (
        <List
          component='nav'
          aria-label='main mailbox folders'
          className={classes.diag}
          dense
        >
          {active.map((item, key) => (
            <ListItem key={key} button>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.mesg}
                secondary={item.date}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}
