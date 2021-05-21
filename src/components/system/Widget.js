import clsx from 'clsx'
// import useTranslation from 'next-translate/useTranslation'
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
    // fontSize: '16px',
    // fontWeight: 'bold'
  },
  cardContent: {
    padding: theme.spacing(2)
  },
  pp: {
    backgroundColor: theme.palette.pp // '#d1ecf1',
  }
}))

export default function Widget (props) {
  const classes = useStyles()
  // const { t } = useTranslation('system')
  // console.log(props)

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={props.action}
        title={props.title}
        classes={{
          action: classes.cardHeaderAction,
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true,
          [classes.pp]:
            props.children.props[8] ||
            props.children.props[9] ||
            props.children.props[10]
        })}
      >
        {props.children}
      </CardContent>
    </Card>
  )
}
