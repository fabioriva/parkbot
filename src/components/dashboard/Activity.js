import * as React from 'react'
// import Avatar from '@mui/material/Avatar'
// import Chip from '@mui/material/Chip'
import Divider from '@mui/material//Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
// import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import Typography from '@mui/material/Typography'
import Avatar from 'src/components/history/HistoryListAvatar'
import LogMessage from 'src/components/history/LogMessage'

export default function Activity ({ activity }) {
  return (
    <List dense>
      {activity.documents.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem sx={{ p: 0 }}>
            <ListItemAvatar>
              <Avatar item={item} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant='subtitle2'
                  component='div'
                  color='text.secondary'
                >
                  {item.logged}
                </Typography>
              }
              secondary={
                <Typography variant='body2' color='text.primary'>
                  <LogMessage item={item} />
                </Typography>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </React.Fragment>
      ))}
    </List>
  )
}
