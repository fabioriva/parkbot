import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Tooltip from 'src/components/Tooltip'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import { grey, yellow } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  on: {
    backgroundColor: yellow[600],
    color: theme.palette.text.primary
  },
  off: {
    background: grey[300],
    color: theme.palette.text.disabled
  }
}))

export default function Bit ({ bit }) {
  const classes = useStyles()
  const { t } = useTranslation('io')

  const tooltip = (
    <div>
      <span>{bit.addr}</span>&nbsp;
      {t(bit.label)}
    </div>
  )
  return (
    <Tooltip title={tooltip}>
      <Paper
        className={clsx({
          [classes.paper]: true,
          [classes.on]: bit.status,
          [classes.off]: !bit.status
        })}
      >
        <strong>{bit.label}</strong>
      </Paper>
    </Tooltip>
  )
}
