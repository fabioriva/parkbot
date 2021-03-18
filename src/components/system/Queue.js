import React from 'react'
import Dialog from './QueueDialog'
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
  root: {
    maxWidth: 345
  }
}))

export default function Queue ({ handleDelete, queueList }) {
  const classes = useStyles()

  const { t } = useTranslation('system')

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState({})

  const handleCancel = () => {
    setOpen(false)
    setValue({})
  }

  const handleClose = async ({ card, index }) => {
    setOpen(false)
    setValue({})
    handleDelete({ card, index })
  }

  const handleOpen = (card, index) => {
    setOpen(true)
    setValue({ card, index })
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
                  onClick={() => handleOpen(item.card, key)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      <Dialog
        open={open}
        value={value}
        onCancel={handleCancel}
        onClose={handleClose}
      />
    </>
  )
}
