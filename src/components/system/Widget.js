import clsx from 'clsx'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  cardHeader: {
    // backgroundColor: '#c0c0c0',
    padding: '8px 16px'
  },
  cardHeaderAction: {
    margin: 0
  },
  cardHeaderTitle: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  cardContent: {
    // padding: theme.spacing(2)
  },
  op: {
    backgroundColor: theme.palette.op // '#fff3cd',
  }
}))

export default function Widget (props) {
  const classes = useStyles()
  const { action, motion, children, title } = props

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={action}
        title={title}
        // subheader='Subtitle'
        classes={{
          action: classes.cardHeaderAction,
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true,
          [classes.op]: motion
        })}
      >
        {children}
      </CardContent>
    </Card>
  )
}
