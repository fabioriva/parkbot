import * as React from 'react'
import { useRouter } from 'next/router'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemButton from '@material-ui/core/ListItemButton'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import PreviewIcon from '@material-ui/icons/Preview'

export default function RacksList ({ aps, locale, racks }) {
  const router = useRouter()

  return (
    <Paper>
      <List subheader={<ListSubheader>PLC Racks</ListSubheader>}>
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
                  <PreviewIcon />
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
