import Badge from 'src/components/lab/Badge'
import Panel from 'src/components/lab/Panel'
// import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

export default function Page () {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
      <Badge name='EVT1' />
      <Panel
        panel={{
          l1: true,
          l2: false,
          l3: true,
          l4: true,
          l5: false
        }}
      />
    </Stack>
  )
}
