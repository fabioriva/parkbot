import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import HistoryListItem from 'src/components/history/HistoryListItem'
// material-ui
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

function renderRow ({ data, index, style }) {
  // Access the items array using the "data" prop:
  return <HistoryListItem item={data.query[index]} key={index} style={style} />
}

export default function HistoryList ({ count, query }) {
  return (
    <Paper>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemCount={count}
              itemData={{ query }}
              itemSize={64}
            >
              {renderRow}
            </List>
          )}
        </AutoSizer>
      </Box>
    </Paper>
  )
}
