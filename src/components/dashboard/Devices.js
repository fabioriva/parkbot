import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Divider from '@mui/material//Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
// import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
// material-ui icons
import BuildIcon from '@mui/icons-material/Build'
import CheckIcon from '@mui/icons-material/Check'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import SettingsIcon from '@mui/icons-material/Settings'
import useTranslation from 'next-translate/useTranslation'

const itemData = ({ card, mode, operation, stall }) => {
  const { t } = useTranslation('dashboard')
  let avatar
  if (mode.id === 8) {
    switch (operation) {
      case 1:
        avatar = (
          <Avatar sx={{ background: '#dff0d8', color: '#3c763d' }}>
            <DirectionsCarIcon />
          </Avatar>
        )
        if (card !== 0 && stall !== 0)
          return { avatar, text: t('device-ce-2', { card, stall }) }
        if (card !== 0) return { avatar, text: t('device-ce-1', { card }) }
        return {
          avatar,
          text: t('device-ce-0')
        }
      case 2:
        avatar = (
          <Avatar sx={{ background: '#d9edf7', color: '#31708f' }}>
            <DirectionsCarIcon />
          </Avatar>
        )
        if (card !== 0 && stall !== 0)
          return { avatar, text: t('device-cu-2', { card, stall }) }
        if (card !== 0) return { avatar, text: t('device-cu-1', { card }) }
        return {
          avatar,
          text: t('device-cu-0')
        }
      default:
        return {
          text: t('device-aut'),
          avatar: (
            <Avatar>
              <CheckIcon />
            </Avatar>
          )
        }
    }
  } else {
    return {
      avatar: (
        <Avatar sx={{ background: '#fcf8e3', color: '#8a6d3b' }}>
          <BuildIcon />
        </Avatar>
      ),
      text: t('device-man')
    }
  }
}

export default function Devices ({ aps, devices }) {
  return (
    <List dense>
      {devices.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem
            sx={{ p: 0 }}
            secondaryAction={
              <IconButton
                edge='end'
                aria-label='delete'
                href={`/${aps}/device/${item.a.id - 1}`}
                disabled
              >
                <SettingsIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Badge
                badgeContent={item.a.step}
                overlap='circular'
                color='primary'
                // showZero
              >
                {itemData(item.a).avatar}
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={<strong>{item.a.name}</strong>}
              secondary={itemData(item.a).text}
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </React.Fragment>
      ))}
    </List>
  )
}
