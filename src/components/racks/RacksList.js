import Link from 'next/link'
// import Error from 'next/error'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import ViewModuleIcon from '@material-ui/icons/ViewModule'
import { blue } from '@material-ui/core/colors'
// import Layout from 'src/app/Layout'
// import { hasRole } from 'src/lib/auth'
// import { RACKS } from 'src/constants/roles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  pink: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500]
  }
}))

export default function RacksList ({ racks, user }) {
  const classes = useStyles()

  // if (!hasRole(currentUser, [DASHBOARD])) return <Error statusCode={403} />

  return (
    <Paper>
      <List className={classes.root} dense>
        {racks !== undefined &&
          racks.map((item, key) => (
            <div key={key}>
              <Link
                href={`/${user.aps}/racks/${key}`}
                // as={`/${user.aps}/racks/rack-${key}`}
              >
                <ListItem alignItems='flex-start' button>
                  <ListItemAvatar>
                    <Avatar className={classes.pink}>
                      {/* <ViewModuleIcon /> */}
                      {/* {item.type.toUpperCase()} */}
                      {item.nr}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={`PLC Rack ${item.nr}`} // {item.description}
                  />
                  <ListItemSecondaryAction>Action</ListItemSecondaryAction>
                </ListItem>
              </Link>
              {/* <Divider variant='inset' component='li' /> */}
            </div>
          ))}
      </List>
    </Paper>
  )
}
