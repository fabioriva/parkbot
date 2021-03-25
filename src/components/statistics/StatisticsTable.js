import useTranslation from 'next-translate/useTranslation'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: theme.spacing(1)
  },
  title: {}
}))

export default function Statistics ({ statistics }) {
  const classes = useStyles()
  const { t } = useTranslation('statistics')

  const { data, label, i18n } = statistics

  return (
    <>
      <Typography variant='subtitle2' className={classes.title}>
        {i18n}: {label}
      </Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table size='small' aria-label='statistics'>
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
    </>
  )
}
