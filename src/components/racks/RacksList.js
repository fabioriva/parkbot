import * as React from 'react'
import { useRouter } from 'next/router'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
// import ListSubheader from '@mui/material/ListSubheader'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export default function RacksList ({ aps, locale, racks }) {
  const router = useRouter()

  return (
    <Paper sx={{ maxWidth: { md: '50%', xs: '100%' } }}>
      <List
        // subheader={
        //   <ListSubheader component='div' id='list-subheader'>
        //     PLC Racks list
        //   </ListSubheader>
        // }
        dense
      >
        {racks.map((item, key, arr) => (
          <React.Fragment key={key}>
            <ListItem
              alignItems='flex-start'
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='view'
                  onClick={() =>
                    router.push(`/${aps}/rack/${key}`, `/${aps}/rack/${key}`, {
                      locale: 'en'
                    })
                  }
                >
                  <InfoOutlinedIcon />
                </IconButton>
              }
            >
              <ListItemButton
                onClick={() =>
                  router.push(`/${aps}/rack/${key}`, `/${aps}/rack/${key}`, {
                    locale: 'en'
                  })
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt={
                      item.serie === 'et200m'
                        ? '/et200mp-1.png'
                        : '/et200sp-1.png'
                    }
                    src={
                      item.serie === 'et200m'
                        ? '/et200mp-1.png'
                        : '/et200sp-1.png'
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={<span>PLC Rack # {item.nr}</span>}
                />
              </ListItemButton>
            </ListItem>
            {arr.length - 1 !== key && (
              <Divider variant='inset' component='li' />
            )}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
}
