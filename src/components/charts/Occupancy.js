import React from 'react'
import { Pie } from 'react-chartjs-2'
import Box from '@mui/material/Box'

// const COLORS = ['#ff0000', '#00ff00', '#ff00ff']
const COLORS = ['rgb(244, 67, 54)', 'rgb(102, 187, 106)', 'rgb(206, 147, 216)']

function Occupancy ({ data, labels, title, height, width }) {
  return (
    <Box
      sx={{
        // border: '1px solid rgba(0, 0, 0, 0.12)',
        height,
        width,
        px: 0,
        py: 0
      }}
    >
      <Pie
        data={{
          labels,
          datasets: [
            {
              data,
              backgroundColor: COLORS,
              hoverBackgroundColor: COLORS
            }
          ]
        }}
        options={{
          plugins: {
            legend: {
              position: 'top',
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
            }
          }
        }}
      />
    </Box>
  )
}

export default React.memo(Occupancy)
