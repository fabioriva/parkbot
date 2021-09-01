// import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import useTranslation from 'next-translate/useTranslation'

export default function Statistics ({ statistics }) {
  const { t } = useTranslation('statistics')

  const { data, label, title } = statistics

  return (
    <>
      <Typography variant='subtitle2' color='primary.main' sx={{ mb: 1 }}>
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
