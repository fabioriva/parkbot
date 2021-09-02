import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { grey, yellow } from '@mui/material/colors'
import Tooltip from 'src/components/Tooltip'
import useTranslation from 'next-translate/useTranslation'

export default function Silomat (props) {
  const { t } = useTranslation('io')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} justify='center'>
        {props.data.map((item, key) => (
          <Grid item xs={key < 8 ? 3 : 4} key={key}>
            <Tooltip title={<div>{item.addr + ' ' + t(item.label)}</div>}>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
