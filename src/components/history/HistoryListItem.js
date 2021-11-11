import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'
import HistoryListAvatar from 'src/components/history/HistoryListAvatar'
import HistoryLogMessage from 'src/components/history/HistoryLogMessage'
import { formatISODate } from 'src/lib/date'

export default function HistoryListItem ({ item, style = {} }) {
  return (
    <ListItem sx={{ py: 0 }} style={style}>
      <ListItemAvatar>
        <HistoryListAvatar item={item} />
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
              sx={{ display: 'inline', fontWeight: 'bold' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {item.device.key}
            </Typography>
            {' — '}
            <HistoryLogMessage item={item} />
          </React.Fragment>
        }
      />
    </ListItem>
  )
}
