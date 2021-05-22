// import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import Item from './Item'
// import Lamp from './Lamp'
import Widget from './Widget'
import Tooltip from 'src/components/Tooltip'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import CardHeader from '@material-ui/core/CardHeader'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
// import RadioButtonUnheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

const useStyles = makeStyles(theme => ({
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
  const { t } = useTranslation('system', 'io')
  console.log(props)

  return (
    <Widget
      action={[]}
      motion={props.motion.id === 1 || props.motion.id === 2}
      title={t('system:' + props.name.key, props.name.query)}
    >
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item
            title={t('system:motion')}
            value={t('system:' + props.motion.i18n)}
          />
        </Grid>
        {Array.isArray(props.position) ? (
          <Grid item xs={6}>
            <Item
              title={t('system:position')}
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
            <Item
              title={t('system:position')}
              value={t('system:' + props.position.i18n)}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <div className={classes.inputs}>
            {props.inputs.map((item, key) => (
              <Tooltip
                key={key}
                title={<div>{item.addr + ' ' + t('io:' + item.label)}</div>}
              >
                <Chip
                  // icon={<CheckCircleOutlineIcon />}
                  label={item.label}
                  color={item.status ? 'primary' : 'default'}
                  size='small'
                />
              </Tooltip>
            ))}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.inputs}>
            {props.outputs.map((item, key) => (
              <Tooltip
                key={key}
                title={<div>{item.addr + ' ' + t('io:' + item.label)}</div>}
              >
                <Chip
                  // icon={<CheckCircleOutlineIcon />}
                  label={item.label}
                  color={item.status ? 'primary' : 'default'}
                  size='small'
                />
              </Tooltip>
            ))}
          </div>
        </Grid>
      </Grid>
    </Widget>
  )
}
