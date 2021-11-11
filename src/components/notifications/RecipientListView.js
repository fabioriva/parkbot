// import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
// import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import useTranslation from 'next-translate/useTranslation'

function stringToColor (string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar (name) {
  const chr = name.split(' ')
  const initials = chr.length >= 2 ? chr[0][0] + chr[1][0] : chr.slice(0, 2)
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: initials
  }
}

export default function RecipientListView ({ mailingList, onDelete }) {
  const { t } = useTranslation('notifications')

  return (
    <List
      dense
      subheader={
        <ListSubheader component='div' id='list-subheader'>
          {t('total-count', { count: mailingList.length })}
        </ListSubheader>
      }
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      {mailingList.map(row => (
        <ListItem
          key={row._id}
          secondaryAction={
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={() => onDelete(row)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar {...stringAvatar(row.name)} />
          </ListItemAvatar>
          <ListItemText
            primary={row.name}
            secondary={row.email}
            // secondary={`${row.email} - ${row.phone}`}
          />
        </ListItem>
      ))}
    </List>
  )
}
