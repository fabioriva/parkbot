import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Tooltip from '@material-ui/core/Tooltip'
// import Chip from '@material-ui/core/Chip'
// import FaceIcon from '@material-ui/icons/Face'
// import DoneIcon from '@material-ui/icons/Done'
import { grey, yellow } from '@material-ui/core/colors'
import { useTranslation } from 'react-i18next'
import Tooltip from 'src/components/Tooltip'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  on: {
    color: theme.palette.text.primary, // '#52c41a',
    background: yellow[500] // '#f6ffed',
    // border:' 1px solid #b7eb8f',
    // borderRadius: '4px'
  },
  off: {
    color: theme.palette.text.disabled, // '#f5222d',
    background: grey[50] // '#fff1f0',
    // border: '1px solid #ffa39e',
    // borderRadius: '4px'
  }
}))

export default function Silomat (props) {
  const classes = useStyles()

  const { t } = useTranslation(['rack'])

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify='center'>
        {props.data.map((item, key) => (
          <Grid item xs={key < 8 ? 3 : 4} key={key}>
            {/* <Chip
              className={clsx({
                [classes.paper]: true,
                [classes.on]: item.status,
                [classes.off]: !item.status
              })}
              // icon={<DoneIcon />}
              label={item.label}
            /> */}
            <Tooltip title={<div>{t(item.label)}</div>}>
              <Paper
                className={clsx({
                  [classes.paper]: true,
                  [classes.on]: item.status,
                  [classes.off]: !item.status
                })}
              >
                {item.label}
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
