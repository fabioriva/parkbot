import React from 'react'
import Dialog from './QueueDeleteDialog'
// material-ui
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
  root: {}
}))

// function chipColor (item) {
//   switch (item.status) {
//     case 0:
//       return 'secondary'
//     default:
//       return 'default'
//   }
// }

// function chipIcon (item) {
//   switch (item.status) {
//     case 0:
//       return <BuildIcon />
//     case 1:
//       return <CheckCircleOutlineIcon />
//     case 3:
//       return <ErrorOutlineIcon />
//     default:
//       return <DriveEtaIcon />
//   }
// }

// function chipLabel (item) {
//   return item.card === 0 ? (
//     <span>
//       <strong>{item.name}</strong> is {item.label}
//     </span>
//   ) : (
//     <span>
//       <strong>{item.name}</strong> is {item.label} card {item.card}
//     </span>
//   )
// }

export default function Queue ({ authorization, handleDelete, queueList }) {
  const classes = useStyles()

  const { t } = useTranslation('system')

  // Dialog
  const DIALOG_INIT_VALUES = {
    card: 0,
    index: 0
  }
  const [open, setOpen] = React.useState(false)
  const [dialog, setDialog] = React.useState(DIALOG_INIT_VALUES)

  const handleCancel = () => {
    setOpen(false)
    setDialog(DIALOG_INIT_VALUES)
  }

  const handleConfirm = async ({ card, index }) => {
    setOpen(false)
    handleDelete({ card, index })
  }

  const handleOpen = (card, index) => {
    setOpen(true)
    setDialog({ card, index })
  }

  return (
    <>
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
                  // onClick={handleOpen}
                  onClick={() => handleOpen(item.card, key + 1)}
                  disabled={!authorization}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      <Dialog
        open={open}
        value={dialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  )
}
