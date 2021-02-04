import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import useTranslation from 'next-translate/useTranslation'

const useStyles = makeStyles(() => ({
  root: {
    // minWidth: 240,
  }
}))

export default function Queue ({ handleDelete, queueList }) {
  const classes = useStyles()

  const { t } = useTranslation('system')

  return (
    <List className={classes.root} dense>
      {queueList
        .filter(item => item.card !== 0)
        .map((item, key) => (
          <ListItem key={key}>
            <ListItemAvatar>
              <Avatar>{item.nr}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t('queue-item-primary', { number: item.card })}
              secondary={t('queue-item-secondary', { number: item.id })}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleDelete(item.card, key)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  )
}