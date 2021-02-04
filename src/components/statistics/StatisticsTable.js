import useTranslation from 'next-translate/useTranslation'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

export default function Statistics ({ data }) {
  const classes = useStyles()
  const { t } = useTranslation('statistics')

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        size='small'
        dense
        aria-label='statistics'
      >
        <TableHead>
          <TableRow>
            <TableCell align='left' />
            <TableCell align='center'>{t('total')}</TableCell>
            <TableCell align='center'>{t('entries')}</TableCell>
            <TableCell align='center'>{t('exits')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='center'>{row.total}</TableCell>
              <TableCell align='center'>{row.entries}</TableCell>
              <TableCell align='center'>{row.exits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
