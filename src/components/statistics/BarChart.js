import { withStyles } from '@material-ui/core/styles'
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

const getIndexFromSeries = series => {
  switch (series) {
    case 'Entries':
      return 'entries'
    case 'Exits':
      return 'exits'
    case 'Total':
      return 'total'
    default:
      return null
  }
}

export default function Bar ({ data }) {
  const { t } = useTranslation('statistics')

  const Content = ({ text, targetItem, ...restProps }) => {
    const displayText =
      data.data[targetItem.point][getIndexFromSeries(targetItem.series)]
    return (
      <Tooltip.Content
        {...restProps}
        text={displayText}
        targetItem={targetItem}
      />
    )
  }

  return (
    <Chart
      data={data.data}
      // rotated
      // barWidth={6}
      height={480}
    >
      <ArgumentAxis />
      <ValueAxis showLabels />
      <BarSeries
        name={t('entries')}
        valueField='entries'
        argumentField='name'
        // color="lime"
        barWidth={0.5}
      />
      <BarSeries
        name={t('exits')}
        valueField='exits'
        argumentField='name'
        // color="red"
        barWidth={0.5}
      />
      <BarSeries
        name={t('total')}
        valueField='total'
        argumentField='name'
        barWidth={0.5}
      />
      <Animation />
      <Legend position='bottom' rootComponent={Root} />
      <Title text={data.label} />
      <Stack
        stacks={[
          // { series: ['Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear'] },
          // { series: ['entries', 'exits', 'total'] },
          { series: [t('entries'), t('exits'), t('total')] }
        ]}
      />
      <EventTracker />
      <Tooltip contentComponent={Content} />
    </Chart>
  )
}
