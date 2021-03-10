import { makeStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'

const useStyles = makeStyles(theme => ({
  lamp: {
    padding: '8px 0px'
  }
}))

export default function Motion ({ motion }) {
  const classes = useStyles()

  return (
    <IconButton aria-label='settings' className={classes.lamp} disabled>
      {motion ? (
        <OfflineBoltIcon style={{ color: yellow[500] }} />
      ) : (
        <OfflineBoltIcon color='disabled' />
      )}
    </IconButton>
  )
}
