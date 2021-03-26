import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import useTranslation from 'next-translate/useTranslation'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import Avatar from './ListAvatar'
import Text from './ListItem'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '100vh'
  },
  root: {
    backgroundColor: theme.palette.background.paper
  }
}))

function renderRow ({ data, index, style }) {
  const { t } = useTranslation('history')
  // Access the items array using the "data" prop:
  const { query, user } = data
  const item = query[index]

  return (
    <div key={index}>
      <Link href={`/${user.aps}/history/${item._id}`}>
        <ListItem button style={style}>
          <ListItemAvatar>
            <Avatar item={item} />
          </ListItemAvatar>
          <ListItemText
            // primary={format(parseISO(item.date), 'yyyy-MM-dd HH:mm:ss')}
            primary={
              item.device.id === 0 ? t('dev-operator') : item.device.name
            }
            secondary={<Text item={item} />}
          />
          <Hidden xsDown>
            <ListItemSecondaryAction>
              <div>
                {formatDistanceToNow(new Date(item.date), {
                  addSuffix: true
                })}
              </div>
            </ListItemSecondaryAction>
          </Hidden>
        </ListItem>
      </Link>
    </div>
  )
}

export default function HistoryList ({ query, user }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className={classes.root}
            height={height}
            width={width}
            itemCount={query.length}
            itemData={{ query, user }}
            itemSize={64}
          >
            {renderRow}
          </List>
        )}
      </AutoSizer>
    </div>
  )
}
