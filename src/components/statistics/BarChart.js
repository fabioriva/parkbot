import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {
  Chart,
  BarSeries,
  Legend,
  Title,
  Tooltip,
  ArgumentAxis,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui'
import { Animation, EventTracker, Stack } from '@devexpress/dx-react-chart'
import useTranslation from 'next-translate/useTranslation'

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  }
})
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
)
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase)

export default function Bar (props) {
  const { t } = useTranslation('statistics')
  // console.log(props.data.data);

  return (
    <Paper>
      <Chart
        data={props.data.data}
        // rotated
        // barWidth={6}
        height={300}
      >
        <ArgumentAxis />

        <ValueAxis max={100} />

        <BarSeries
          name={t('entries')}
          valueField='entries'
          argumentField='name'
          // color="lime"
          // barWidth={0.5}
        />

        <BarSeries
          name={t('exits')}
          valueField='exits'
          argumentField='name'
          // color="red"
          // barWidth={0.5}
        />

        {/* <BarSeries
          name="total"
          valueField="total"
          argumentField="name"
        /> */}

        <Animation />
        <Legend position='bottom' rootComponent={Root} />
        <Title text={props.data.label} />
        <Stack
          stacks={[
            // { series: ['Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear'] },
            // { series: ['entries', 'exits', 'total'] },
            { series: [t('entries'), t('exits')] }
          ]}
        />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  )
}
