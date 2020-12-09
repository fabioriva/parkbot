import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

const ParkBot = () => {
  const classes = useStyles()

  return (
    <Avatar
      alt='ParkBot'
      className={classes.avatar}
      src='/bot.svg'
      // src='https://avatars.dicebear.com/api/bottts/g.svg'
    />
  )
}

export default ParkBot
