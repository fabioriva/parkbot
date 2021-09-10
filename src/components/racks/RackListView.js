import * as React from 'react'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import Avatar from '@mui/material//Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material//List'
import ListItem from '@mui/material//ListItem'
import ListItemText from '@mui/material//ListItemText'
import ListItemAvatar from '@mui/material//ListItemAvatar'
import ListSubheader from '@mui/material//ListSubheader'
import Paper from '@mui/material//Paper'
import Skeleton from '@mui/material/Skeleton'
import { green } from '@mui/material//colors'

export default function Rack ({ loading, rack }) {
  const { t } = useTranslation('io')

  return (
    <React.Fragment>
      {rack.cards.map((card, key) => (
        <Paper key={key} sx={{ mb: 3 }}>
          <List
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                // sx={{ bgcolor: 'text.disabled' }}
              >
                Card {card.nr} {card.type}
              </ListSubheader>
            }
            dense
          >
            {card.bytes.map((byte, key) =>
              byte.bits.map((bit, key, arr) => (
                <React.Fragment>
                  <ListItem key={key}>
                    <ListItemAvatar>
                      {loading ? (
                        <Skeleton variant='circular' width={32} height={32} />
                      ) : (
                        <Avatar
                          sx={{
                            bgcolor: bit.status && green[500],
                            // fontSize: 16
                            width: 32,
                            height: 32
                          }}
                          variant='rounded'
                        >
                          .{key}
                        </Avatar>
                      )}
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        loading ? (
                          <Skeleton variant='text' />
                        ) : (
                          <div>
                            {bit.addr}&nbsp;
                            {bit.label && <strong>{bit.label}</strong>}
                          </div>
                        )
                      }
                      secondary={
                        loading ? (
                          <Skeleton variant='text' />
                        ) : (
                          t(bit.label, {}, { fallback: 'fallback' })
                        )
                      }
                    />
                  </ListItem>
                  {arr.length - 1 !== key ? (
                    <Divider variant='inset' component='li' />
                  ) : (
                    <Divider component='li' />
                  )}
                </React.Fragment>
              ))
            )}
          </List>
        </Paper>
      ))}
    </React.Fragment>
  )
}
