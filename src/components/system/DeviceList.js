import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
// material-ui icons
import BuildIcon from '@material-ui/icons/Build'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    // backgroundColor: '#f0f0f0' // theme.palette.background.paper
  },
  avatar: {
    fontSize: 12
    // height: theme.spacing(3),
    // width: theme.spacing(3)
  }
}))

export default function DeviceList ({ devices }) {
  const classes = useStyles()

  const secondaryText = data => {
    const {
      id,
      name,
      card,
      mode,
      motor,
      operation,
      position,
      size,
      stall,
      step
    } = data
    console.log(data)
    if (mode.id === 8) {
      switch (operation) {
        case 1:
          if (card === 0 && stall === 0) {
            return <span>Entering car</span>
          } else if (stall === 0) {
            return (
              <span>
                Entering card <strong>{card}</strong>
              </span>
            )
          } else {
            return (
              <span>
                Entering card <strong>{card}</strong> in stall{' '}
                <strong>{stall}</strong>
              </span>
            )
          }
        case 2:
          if (card === 0 && stall === 0) {
            return <span>Exiting car</span>
          } else if (stall === 0) {
            return (
              <span>
                Exiting card <strong>{card}</strong>
              </span>
            )
          } else {
            return (
              <span>
                Exiting card <strong>{card}</strong> in stall{' '}
                <strong>{stall}</strong>
              </span>
            )
          }
        case 3:
          if (card === 0 && stall === 0) {
            return <span>In operation</span>
          } else if (stall === 0) {
            return (
              <span>
                Operating card <strong>{card}</strong>
              </span>
            )
          } else {
            return (
              <span>
                Operating card <strong>{card}</strong> stall{' '}
                <strong>{stall}</strong>
              </span>
            )
          }
        default:
          return <span>Device ready</span>
      }
    } else {
      return <span>Device is offline</span>
    }
  }

  const deviceStatus = data => {
    if (data.mode.id === 8) {
      if (data.operation === 0) {
        return (
          <Chip size='small' icon={<CheckCircleOutlineIcon />} label='Ready' />
        )
      } else {
        return (
          <Chip
            size='small'
            icon={<DriveEtaIcon />}
            label='Running'
            color='primary'
          />
        )
      }
    } else {
      return (
        <Chip
          size='small'
          icon={<BuildIcon />}
          label='Manual'
          color='secondary'
        />
      )
    }
  }
  // const deviceStatus = status => {
  //   switch (status) {
  //     case 1:
  //       return (
  //         <Chip size='small' icon={<CheckCircleOutlineIcon />} label='Ready' />
  //       )
  //     case 3:
  //       return (
  //         <Chip
  //           size='small'
  //           icon={<ErrorOutlineIcon />}
  //           label='Error'
  //           color='secondary'
  //         />
  //       )
  //     case 4:
  //     case 5:
  //       return (
  //         <Chip
  //           size='small'
  //           icon={<DriveEtaIcon />}
  //           label='Running'
  //           color='primary'
  //         />
  //       )
  //     default:
  //       return (
  //         <Chip
  //           size='small'
  //           icon={<BuildIcon />}
  //           label='Manual'
  //           color='secondary'
  //         />
  //       )
  //   }
  // }

  return (
    <List className={classes.root} dense>
      {devices.map((item, key) => (
        <React.Fragment key={key}>
          <ListItem>
            {/* <ListItemAvatar>
              <Avatar className={classes.avatar}>{item.a.name}</Avatar>
            </ListItemAvatar> */}
            <ListItemText
              primary={<strong>{item.a.name}</strong>}
              secondary={secondaryText(item.a)}
            />
            <ListItemSecondaryAction>
              {deviceStatus(item.a)}
            </ListItemSecondaryAction>
          </ListItem>
          {/* <Divider variant='inset' component='li' /> */}
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}
