import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import EditIcon from '@material-ui/icons/Edit'
import PersonIcon from '@material-ui/icons/Person'
import { blue } from '@material-ui/core/colors'
import useTranslation from 'next-translate/useTranslation'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    fontSize: 16
  }
}))

export default function User ({ handleDelete, cards }) {
  const classes = useStyles()
  const { t } = useTranslation('cards')

  return (
    <Paper>
      <List className={classes.root} dense>
        {cards.map((item, key) => (
          <ListItem key={key} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
                {/* {key + 1} */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <span>
                  {t('card')} {item.nr}
                </span>
              }
              secondary={
                <span>
                  {t('code')} <strong>{item.rand}</strong>
                </span>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleDelete(item)}
                disabled
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
