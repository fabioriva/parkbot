import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
// import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { format, formatDistance, parseISO } from 'date-fns'
import Avatar from './ListAvatar'
import Text from './ListItem'
// import { FixedSizeList as List } from 'react-window'
// import AutoSizer from 'react-virtualized-auto-sizer'

// const appBarHeight = 149 + 56

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    // height: `calc(100vh - ${appBarHeight}px)`
    height: '100vh'
  },
  root: {
    backgroundColor: theme.palette.background.paper
  }
}))

function renderRow ({ data, index, style }) {
  // Access the items array using the "data" prop:
  const { query, user } = data
  const item = query[index]
  return (
    <div key={index}>
      <Link href={`/${user.aps}/log/${item._id}`}>
        <ListItem button style={style}>
          {/* <ListItemText primary={`Item ${index + 1}`} /> */}
          <ListItemAvatar>
            <Avatar id={item.operation.id} />
          </ListItemAvatar>
          <ListItemText
            primary={format(parseISO(item.date), 'yyyy-MM-dd HH:mm:ss')}
            secondary={<Text item={item} />}
          />
          <Hidden xsDown>
            <ListItemSecondaryAction>
              <div>
                {formatDistance(new Date(item.date), new Date(), {
                  addSuffix: true
                })}
              </div>
            </ListItemSecondaryAction>
          </Hidden>
        </ListItem>
      </Link>
      {/* <Divider variant="inset" component="li" /> */}
    </div>
  )
}

export default function UserActivity ({ query, user }) {
  const classes = useStyles()

  return (
    <List
      className={classes.root}
      // height={height}
      // width={width}
      itemCount={query.length}
      itemData={{ query, user }}
      itemSize={64}
    >
      {renderRow}
    </List>
  )
}
