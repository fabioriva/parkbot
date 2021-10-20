import * as React from 'react'
import Divider from '@mui/material//Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'
import Avatar from 'src/components/history/HistoryListAvatar'
// import LogMessage from 'src/components/history/LogMessage'
import HistoryLogMessage from 'src/components/lab/HistoryLogMessage'
import { formatISODate } from 'src/lib/date'

export default function Activity ({ aps, activity }) {
  return (
    <List dense>
      {activity.documents.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem sx={{ py: 0 }}>
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
                  {formatISODate(item.date)}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    {item.device.key}
                  </Typography>
                  {' — '}
                  {/* <LogMessage item={item} /> */}
                  <HistoryLogMessage item={item} />
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </React.Fragment>
      ))}
    </List>
  )
}
