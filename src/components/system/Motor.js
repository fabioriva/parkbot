import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Item from './Item'
// import Lamp from './Lamp'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
// import RadioButtonUnheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

const useStyles = makeStyles(theme => ({
  root: {
    // marginBottom: theme.spacing(3),
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
  },
  inputs: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.2)
    }
  }
}))

export default function Motor (props) {
  const classes = useStyles()
  const { t } = useTranslation('system')
  console.log(props)

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        // action={[
        //   <Lamp key='0' item={props.enable} on='readyOn' off='readyOff' />
        // ]}
        title={t(props.name.key, props.name.query)}
        // subheader={t('motor')}
        classes={{
          action: classes.cardHeaderAction,
          title: classes.cardHeaderTitle
        }}
      />
      <CardContent
        className={clsx({
          [classes.cardContent]: true,
          // [classes.ce]: operation === 1,
          // [classes.cu]: operation === 2,
          [classes.pp]: props.motion.id === 1 || props.motion.id === 2
        })}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item title={t('motion')} value={t(props.motion.i18n)} />
          </Grid>
          {Array.isArray(props.position) ? (
            <Grid item xs={6}>
              <Item
                title={t('position')}
                value={
                  <span>
                    {props.position[0].position}&nbsp;&rarr;&nbsp;
                    {props.position[0].destination}
                  </span>
                }
              />
            </Grid>
          ) : (
            <Grid item xs={6}>
              <Item title={t('position')} value={t(props.position.i18n)} />
            </Grid>
          )}

          <Grid item xs={12}>
            <div className={classes.inputs}>
              {props.inputs.map((item, key) => (
                <Chip
                  key={key}
                  // icon={<CheckCircleOutlineIcon />}
                  label={item.label}
                  color={item.status ? 'primary' : 'default'}
                  size='small'
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.inputs}>
              {props.outputs.map((item, key) => (
                <Chip
                  key={key}
                  // icon={<CheckCircleOutlineIcon />}
                  label={item.label}
                  color={item.status ? 'primary' : 'default'}
                  size='small'
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
