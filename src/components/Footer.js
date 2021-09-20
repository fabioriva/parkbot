import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Copyright from 'src/components/Copyright'

export default function Footer () {
  return (
    <Box
      component='footer'
      sx={{
        py: 1,
        px: 0,
        mt: 'auto'
        // backgroundColor: theme =>
        //   theme.palette.mode === 'light'
        //     ? theme.palette.grey[300]
        //     : theme.palette.background.default // theme.palette.grey[800]
      }}
    >
      <Container maxWidth='md'>
        <Copyright />
      </Container>
    </Box>
  )
}
