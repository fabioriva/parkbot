// import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import useTranslation from 'next-translate/useTranslation'
import Avatar from './ListAvatar'
import Text from './ListItem'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}))

export default function RecentActivity ({ data, user }) {
  const classes = useStyles()
  const { t } = useTranslation('history')

  return (
    <>
      {data.documents.length > 0 && (
        <List className={classes.root} dense>
          {data.documents.map((item, key) => (
            <ListItem key={key}>
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
                    {formatDistanceToNow(new Date(item.logged), {
                      addSuffix: true
                    })}
                  </div>
                </ListItemSecondaryAction>
              </Hidden>
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}
