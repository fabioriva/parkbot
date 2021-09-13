import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
import DeleteIcon from '@mui/icons-material/Delete'
import QueueDelete from 'src/components/overview/QueueDelete'

export default function QueueList (props) {
  const { t } = useTranslation('overview')

  // Dialog
  const DIALOG_INIT_VALUES = { card: 0, index: 0 }
  const [open, setOpen] = React.useState(false)
  const [dialog, setDialog] = React.useState(DIALOG_INIT_VALUES)

  const handleCancel = () => {
    setOpen(false)
    setDialog(DIALOG_INIT_VALUES)
  }

  const handleConfirm = async ({ card, index }) => {
    setOpen(false)
    setDialog(DIALOG_INIT_VALUES)
    props.onDelete({ card, index })
  }

  const handleOpen = (card, index) => {
    setOpen(true)
    setDialog({ card, index })
  }

  return (
    <>
      <List dense>
        {props.queue
          .filter(item => item.card === 0)
          .map((element, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar>{element.nr}</Avatar>
              </ListItemAvatar>
              <ListItemText
                // primary={t('queue-item-primary', { number: element.card })}
                // secondary={t('queue-item-secondary', { number: element.id })}
                primary={
                  props.loading ? (
                    <Skeleton variant='text' animation='wave' width='80%' />
                  ) : (
                    <>{t('queue-item-primary', { number: element.card })}</>
                  )
                }
                secondary={
                  props.loading ? (
                    <Skeleton variant='text' animation='wave' width='80%' />
                  ) : (
                    <>{t('queue-item-secondary', { number: element.id })}</>
                  )
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => handleOpen(element.card, index + 1)}
                  // disabled={!props.authorization}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      <QueueDelete
        open={open}
        value={dialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  )
}
