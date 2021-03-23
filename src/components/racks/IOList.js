import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListSubheader from '@material-ui/core/ListSubheader'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(1)
  },
  avatar: {
    fontSize: 12
  },
  true: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600]
  }
}))

export default function Rack ({ rack }) {
  const classes = useStyles()
  const { t } = useTranslation('io')

  return (
    <>
      {rack.cards.map((card, key) => (
        <Paper key={key}>
          <List
            className={classes.root}
            subheader={
              <ListSubheader component='div' id='nested-list-subheader'>
                Card {card.nr} {card.type}
              </ListSubheader>
            }
            dense
          >
            {card.bytes.map((byte, key) =>
              byte.bits.map((bit, key) => (
                <ListItem key={key}>
                  <ListItemAvatar>
                    <Avatar
                      className={clsx({
                        [classes.avatar]: true,
                        [classes.true]: bit.status
                      })}
                    >
                      {bit.label}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      bit.label !== '' ? bit.label + ' ' + bit.addr : bit.addr
                    }
                    secondary={bit.label !== '' && t(bit.label)}
                  />
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      ))}
    </>
  )
}
