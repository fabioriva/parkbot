import { Bar } from 'react-chartjs-2'
import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors'

export default function Occupancy ({ data, labels, title, height, width }) {
  const data_ = { labels: [], entries: [], exits: [], total: [] }
  data.forEach(e => {
    data_.labels.push(e.name)
    data_.entries.push(e.entries)
    data_.exits.push(e.exits)
    data_.total.push(e.total)
  })

  return (
    <Box
      sx={{
        // border: '1px solid #eee',
        height,
        width,
        px: 2,
        py: 1,
        mb: 3
      }}
    >
      {/* <Typography variant='h6' component='h2' gutterBottom>
        {title}
      </Typography> */}
      <Bar
        height={height}
        width={width}
        data={{
          labels: data_.labels,
          datasets: [
            {
              label: labels[0],
              data: data_.entries,
              backgroundColor: 'rgb(156, 204, 101)'
            },
            {
              label: labels[1],
              data: data_.exits,
              backgroundColor: 'rgb(255, 112, 67)'
            },
            {
              label: labels[2],
              data: data_.total,
              backgroundColor: 'rgb(66, 165, 245)'
            }
          ]
        }}
        options={{
          indexAxis: 'x',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: title,
              color: 'blue',
              font: {
                size: 16,
                weight: 'bold'
                // style: 'italic'
              }
            }
          },
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                stacked: true
              }
            ]
          }
        }}
      />
    </Box>
  )
}
