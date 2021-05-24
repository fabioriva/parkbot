import useTranslation from 'next-translate/useTranslation'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { grey, yellow } from '@material-ui/core/colors'
import Tooltip from 'src/components/Tooltip'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0.5),
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

export default function Silomat (props) {
  const classes = useStyles()
  const { t } = useTranslation('io')

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify='center'>
        {props.data.map((item, key) => (
          <Grid item xs={key < 8 ? 3 : 4} key={key}>
            <Tooltip title={<div>{item.addr + ' ' + t(item.label)}</div>}>
              <Paper
                className={clsx({
                  [classes.paper]: true,
                  [classes.on]: item.status,
                  [classes.off]: !item.status
                })}
                elevation={0}
              >
                <strong>{item.label}</strong>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
