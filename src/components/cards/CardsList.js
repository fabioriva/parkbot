import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardEdit from 'src/components/cards/CardEditForm'
// material-ui
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import EditIcon from '@material-ui/icons/Edit'
import PersonIcon from '@material-ui/icons/Person'

export default function CardsList ({ authorization, handleEdit, cards }) {
  const { t } = useTranslation('cards')

  // Dialog
  const DIALOG_INIT_VALUES = {
    card: 0,
    code: '',
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
    setOpen(false)
    handleEdit(data)
  }

  const handleOpen = card => {
    setOpen(true)
    setDialog({ ...dialog, card: card.nr, code: card.code })
  }

  return (
    <React.Fragment>
      <List
        subheader={
          <ListSubheader component='div' id='list-subheader'>
            {t('cards-total-count', { count: cards.length })}
          </ListSubheader>
        }
        dense
      >
        {cards.map((item, key) => (
          <ListItem key={key}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
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
                aria-label='edit'
                onClick={() => handleOpen(item)}
                disabled={!authorization}
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <CardEdit
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        value={dialog}
      />
    </React.Fragment>
  )
}
