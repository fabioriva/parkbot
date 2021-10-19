import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import useTranslation from 'next-translate/useTranslation'
import { formatISODate } from 'src/lib/date'

function color (op) {
  switch (op) {
    case 1:
      return 'error.main'
    case 2:
      return 'success.main'
    case 3:
      return 'warning.main'
    case 4:
      return 'info.main'
  }
}

function Row ({ row }) {
  const { t } = useTranslation('history')
  // console.log(row)
  // console.log(typeof row.date, row.date) // string
  return (
    <React.Fragment>
      <TableRow sx={{ '&:hover': { cursor: 'pointer' } }} hover>
        <TableCell component='th' scope='row'>
          {formatISODate(row.date)}
          {/* {format(parseISO(row.date), 'yyyy-MM-dd HH:mm:ss')} */}
          {/* {format(row.date, 'yyyy-MM-dd"T"HH:mm:ss.SSS"Z"')} */}
        </TableCell>
        <TableCell align='left'>{row.device.key}</TableCell>
        <TableCell align='left'>
          {row.mode.id}
          {' — '}
          {t(row.mode.key)}
        </TableCell>
        <TableCell align='left' sx={{ color: color(row.operation.id) }}>
          {row.alarm !== undefined && (
            <>
              {/* <span>AL{row.alarm.id}</span>&nbsp;
              {t('alarms:' + row.alarm.key, row.alarm.query, {
                fallback: ['alarms:fallback1', 'fallback2']
              })} */}
              {t('alarms:' + row.alarm.key, row.alarm.query, {
                fallback: ['alarms:fallback1', 'fallback2']
              })}
            </>
          )}
          {row.alarm === undefined && t(row.operation.key)}
        </TableCell>
        <TableCell align='center' sx={{ color: color(row.operation.id) }}>
          {row.alarm !== undefined && <strong>AL{row.alarm.id}</strong>}
        </TableCell>
        <TableCell align='center'>{row.card}</TableCell>
        <TableCell align='center'>{row.stall}</TableCell>
        <TableCell align='center'>{row.size}</TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function HistoryTable ({ count, query }) {
  const { t } = useTranslation('history')

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(15)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='history'>
          <TableHead>
            <TableRow>
              <TableCell>{t('date')}</TableCell>
              <TableCell align='left'>{t('device')}</TableCell>
              <TableCell align='left'>{t('mode')}</TableCell>
              <TableCell align='left'>{t('operation')}</TableCell>
              <TableCell align='center'>{t('alarm')}</TableCell>
              <TableCell align='center'>{t('card')}</TableCell>
              <TableCell align='center'>{t('stall')}</TableCell>
              <TableCell align='center'>{t('size')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {query
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <Row key={index} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 25, 50]}
        component='div'
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  )
}
