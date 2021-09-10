import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardEdit from 'src/components/cards/CardEditForm'
// material-ui
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListSubheader from '@mui/material/ListSubheader'
import Skeleton from '@mui/material/Skeleton'
import EditIcon from '@mui/icons-material/Edit'
import PersonIcon from '@mui/icons-material/Person'

export default function CardsList ({
  authorization,
  handleEdit,
  cards,
  loading
}) {
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
                loading ? (
                  <Skeleton variant='text' />
                ) : (
                  <span>
                    {t('card')} {item.nr}
                  </span>
                )
              }
              secondary={
                loading ? (
                  <Skeleton variant='text' />
                ) : (
                  <span>
                    {t('code')} <strong>{item.code}</strong>
                  </span>
                )
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
