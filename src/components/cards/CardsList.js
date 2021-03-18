import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Dialog from 'src/components/cards/CardEditDialog'
// material-ui
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

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper
  },
  avatar: {
    color: theme.palette.getContrastText(blue[600]),
    backgroundColor: blue[600],
    fontSize: 16
  }
}))

export default function User ({ handleEdit, cards }) {
  const classes = useStyles()
  const { t } = useTranslation('cards')

  // Dialog
  const DIALOG_INIT_VALUES = {
    card: {
      nr: 1,
      code: ''
    },
    minCard: 1,
    maxCard: cards.length
  }
  const [open, setOpen] = React.useState(false)
  const [dialog, setDialog] = React.useState(DIALOG_INIT_VALUES)

  const handleCancel = () => {
    setOpen(false)
    setDialog(DIALOG_INIT_VALUES)
  }

  const handleConfirm = data => {
    console.log(data)
    setOpen(false)
    handleEdit(data)
  }

  const handleOpen = card => {
    setOpen(true)
    setDialog({ ...dialog, card })
  }

  return (
    <Paper>
      <List className={classes.root} dense>
        {cards.map((item, key) => (
          <ListItem key={key}>
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
                  {t('code')} <strong>{item.code}</strong>
                </span>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleOpen(item)}
                // disabled
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Dialog
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        value={dialog}
      />
    </Paper>
  )
}
