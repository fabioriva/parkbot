import React from 'react'
// import Link from 'next/link'
// import { formatDistanceToNow } from 'date-fns'
import randomColor from 'randomcolor'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
// import Avatar from 'src/components/history/HistoryListAvatar'
import LogMessage from 'src/components/history/LogMessage'
// material-ui
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import PersonIcon from '@material-ui/icons/Person'
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded'

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
      <Paper sx={{ height: '80vh' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              sx={{ color: '#fff' }}
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
      </Paper>
    </React.Fragment>
  )
}
