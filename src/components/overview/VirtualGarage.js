import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCarTwoTone'

import Bit from 'src/components/Bit'
import Tooltip from 'src/components/Tooltip'
// import useTranslation from 'next-translate/useTranslation'
import { grey, yellow } from '@mui/material/colors'
const Item = styled(Box)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function DirectionalPanel (props) {
  // const { t } = useTranslation('io')

  const { l1, l2, l3, l4, l5 } = props.panel

  const LP = (
    <Grid
      container
      spacing={0}
      justifyContent='center'
      // sx={{ width: '50%', margin: 'auto' }}
    >
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Item>
          <ArrowUpwardIcon
            color={l1 ? 'success' : 'disabled'}
            sx={{ fontSize: 32 }}
          />
        </Item>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Item>
          <ArrowBackIcon
            color={l4 ? 'success' : 'disabled'}
            sx={{ fontSize: 32 }}
          />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <DirectionsCarIcon
            color={l3 ? 'error' : 'disabled'}
            sx={{ fontSize: 32 }}
          />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <ArrowForwardIcon
            color={l5 ? 'success' : 'disabled'}
            sx={{ fontSize: 32 }}
          />
        </Item>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Item>
          <ArrowDownwardIcon
            color={l2 ? 'success' : 'disabled'}
            sx={{ fontSize: 32 }}
          />
        </Item>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  )

  const VG = (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justify='center'>
        {props.sensors.map((item, key) => (
          <Grid item xs={6} key={key}>
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

  return (
    <Grid
      container
      spacing={2}
      alignItems='center'
      justifyContent='center'
      // sx={{ width: '50%', margin: 'auto' }}
    >
      <Grid item xs={6}>
        <Stack spacing={1}>
          <Box
            sx={{
              backgroundColor: '#e0e0e0',
              border: 1,
              borderColor: 'rgba(0, 0, 0, 0.12)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {LP}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant='body2'
              color='text.secondary'
              display='block'
              sx={{
                color: 'info.dark',
                // fontSize: 18,
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
            >
              {l3 ? 'Car in position' : 'Car entering'}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        {VG}
      </Grid>
    </Grid>
  )
}
