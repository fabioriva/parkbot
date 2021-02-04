import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import Item from 'src/components/history/HistoryTableItem'
// import { format, parseISO } from 'date-fns'
import useTranslation from 'next-translate/useTranslation'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  danger: {
    backgroundColor: '#f2dede',
    color: '#a94442'
  },
  success: {
    backgroundColor: '#dff0d8',
    color: '#3c763d'
  },
  warning: {
    backgroundColor: '#fcf8e3',
    color: '#8a6d3b'
  },
  info: {
    backgroundColor: '#d9edf7',
    color: '#31708f'
  }
})

export default function HistoryTable ({ count, query }) {
  const classes = useStyles()
  const { t } = useTranslation('history')

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='history'>
          <TableHead>
            <TableRow>
              <TableCell>{t('date')}</TableCell>
              <TableCell align='left'>{t('device')}</TableCell>
              <TableCell align='left'>{t('mode')}</TableCell>
              <TableCell align='left'>{t('operation')}</TableCell>
              <TableCell align='center'>{t('card')}</TableCell>
              <TableCell align='center'>{t('stall')}</TableCell>
              <TableCell align='center'>{t('size')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {query
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow
                  key={row._id}
                  className={clsx({
                    [classes.danger]: row.operation.id === 1,
                    [classes.success]: row.operation.id === 2,
                    [classes.warning]: row.operation.id === 3,
                    [classes.info]: row.operation.id === 4
                  })}
                >
                  <TableCell component='th' scope='row'>
                    {row.logged}
                    {/* {format(parseISO(row.date), 'yyyy-MM-dd HH:mm:ss')} */}
                  </TableCell>
                  <TableCell align='left'>{row.device.name}</TableCell>
                  <TableCell align='left'>{row.mode.info}</TableCell>
                  {/* <TableCell align='left'>{row.operation.info}</TableCell> */}
                  <TableCell align='left'>
                    <Item item={row} />
                  </TableCell>
                  <TableCell align='center'>{row.card}</TableCell>
                  <TableCell align='center'>{row.stall}</TableCell>
                  <TableCell align='center'>{row.size}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  )
}
