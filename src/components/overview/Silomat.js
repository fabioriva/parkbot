import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { grey, yellow } from '@mui/material/colors'
import Bit from 'src/components/Bit'
import Tooltip from 'src/components/Tooltip'

export default function Silomat (props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justify='center'>
        {props.data.map((item, key) => (
          <Grid item xs={key < 8 ? 3 : 4} key={key}>
            {props.loading ? (
              <Skeleton variant='text' animation='wave' />
            ) : (
              <Tooltip title={<Bit {...item} />}>
                <Paper
                  sx={{
                    bgcolor: item.status ? yellow[600] : grey[300],
                    color: theme =>
                      item.status
                        ? theme.palette.text.primary
                        : theme.palette.text.disabled,
                    textAlign: 'center',
                    py: 0.5
                  }}
                  elevation={0}
                >
                  <strong>{item.label}</strong>
                </Paper>
              </Tooltip>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
