import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Tooltip from 'src/components/Tooltip'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  on: {
    backgroundColor: yellow[600]
  },
  off: {
    backgroundColor: '#e0e0e0'
  }
}))

export default function Bit ({ bit }) {
  const classes = useStyles()
  const { t } = useTranslation('io')

  return (
    <Tooltip title={<div>{t(bit.label)}</div>}>
      <Paper
        className={clsx({
          [classes.paper]: true,
          [classes.on]: bit.status,
          [classes.off]: !bit.status
        })}
      >
        <strong>{bit.label}</strong> {bit.addr}
      </Paper>
    </Tooltip>
  )
}
