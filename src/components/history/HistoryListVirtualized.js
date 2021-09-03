import React from 'react'
// import Link from 'next/link'
// import { formatDistanceToNow } from 'date-fns'
import randomColor from 'randomcolor'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
// import Avatar from 'src/components/history/HistoryListAvatar'
import LogMessage from 'src/components/history/LogMessage'
// material-ui
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import PersonIcon from '@mui/icons-material/Person'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'

function renderRow ({ data, index, style }) {
  // Access the items array using the "data" prop:
  const item = data.query[index]

  return (
    <div key={index}>
      {/* <Link href={`/${user.aps}/history/${item._id}`}> */}
      <ListItem
        button
        style={style}
        secondaryAction={
          item.operation.id === 1 && (
            <IconButton edge='end' aria-label='active'>
              <PriorityHighRoundedIcon color='error' />
            </IconButton>
          )
        }
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: randomColor({
                luminosity: 'dark',
                seed: item.device.name
              }),
              // color: 'text.primary',
              fontSize: '1.0rem',
              fontWeight: 'bolder'
            }}
          >
            {item.device.id === 0 ? <PersonIcon /> : item.device.name}
          </Avatar>
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
      {/* </Link> */}
    </div>
  )
}

export default function HistoryList ({ count, query }) {
  return (
    <React.Fragment>
      <Paper>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <AutoSizer>
            {({ height, width }) => (
              <List
                sx={{ bgcolor: '#fff' }}
                height={height}
                width={width}
                itemCount={count}
                itemData={{ query }}
                itemSize={64}
              >
                {renderRow}
              </List>
            )}
          </AutoSizer>
        </Box>
      </Paper>
    </React.Fragment>
  )
}
