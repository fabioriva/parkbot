import { withStyles } from '@material-ui/core/styles'
import {
  Chart,
  Legend,
  PieSeries,
  // Title,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui'
import { Animation, EventTracker, Palette } from '@devexpress/dx-react-chart'
import useTranslation from 'next-translate/useTranslation'

const scheme = ['#00ff00', '#ff0000', '#ff00ff']

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  },
  label: {
    textAlign: 'center'
  }
})

const legendRootBase = props => {
  const { classes, ...restProps } = props
  return <Legend.Root {...restProps} className={classes.root} />
}
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase)

const legendLabelBase = props => {
  const { t } = useTranslation('map')

  const { classes, ...restProps } = props
  return (
    <Legend.Label
      {...restProps}
      text={t(props.text)}
      className={classes.label}
    />
  )
}
const Label = withStyles(legendStyles)(legendLabelBase)

export default function Occupancy (props) {
  return (
    <Chart
      data={props.data}
      // height={300}
      // width={200}
    >
      <Legend position='bottom' rootComponent={Root} labelComponent={Label} />
      <Palette scheme={scheme} />
      <PieSeries valueField='value' argumentField='id' />
      {/* <Title
          text="Occupancy"
        /> */}
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  )
}