// import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import useTranslation from 'next-translate/useTranslation'

export default function Statistics ({ statistics }) {
  const { t } = useTranslation('statistics')

  const { data, label, title } = statistics

  return (
    <>
      <Typography
        variant='subtitle2'
        color='primary.main'
        sx={{ mb: 3, pl: 1 }}
      >
        {/* {t('i18n')}: {label} */}
        {title}: {label}
      </Typography>
      <TableContainer>
        <Table size='small' aria-label='statistics'>
          <TableHead>
            <TableRow>
              <TableCell align='left' />
              <TableCell align='center'>{t('entries')}</TableCell>
              <TableCell align='center'>{t('exits')}</TableCell>
              <TableCell align='center'>{t('total')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.entries}</TableCell>
                <TableCell align='center'>{row.exits}</TableCell>
                <TableCell align='center'>{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
