import React from 'react'
// import Link from 'next/link'
// import { format, parseISO } from 'date-fns'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import useTranslation from 'next-translate/useTranslation'

// function bgcolor (op, theme) {
//   switch (op) {
//     case 1:
//       return theme.palette.cu // 'rgb(244,67,54)'
//     case 2:
//       return theme.palette.ce // 'rgb(102,187,106)'
//     case 3:
//       return theme.palette.op // 'rgb(244,167,38)'
//     case 4:
//       return theme.palette.pp // 'rgb(41,182,246)'
//     // default:
//     //   return '#fff' // 'rgba(0, 0, 0, 0.87)'
//   }
// }

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
  // const [open, setOpen] = React.useState(false)
  // console.log(row)

  return (
    <React.Fragment>
      <TableRow sx={{ '&:hover': { cursor: 'pointer' } }} hover>
        <TableCell component='th' scope='row'>
          {row.logged}
          {/* {format(parseISO(row.date), 'yyyy-MM-dd HH:mm:ss')} */}
          {/* {row.logged} | {row.date} */}
          {/* {format(row.date, 'yyyy-MM-dd HH:mm:ss')} */}
          {/* {row.dateStr} | {format(parseISO(row.date), 'yyyy-MM-dd HH:mm:ss')} */}
        </TableCell>
        <TableCell align='left'>
          {/* {row.device.id} - {row.device.id === 0 ? t('dev-operator') : row.device.name} */}
          {/* {row.device.id} - {devices[row.device.id]} */}
          {/* {row.device.id} -{' '} */}
          {row.device?.id !== undefined ? row.device.name : t('dev-operator')}
        </TableCell>
        <TableCell align='left'>
          {row.mode.id} - {t(row.mode.label)}
          {/* {row.mode.id} - {t(modes[row.mode.id])} */}
        </TableCell>
        <TableCell
          // sx={{ bgcolor: theme => bgcolor(row.operation.id, theme) }}
          align='left'
          sx={{ color: color(row.operation.id) }}
        >
          {/* {row.operation.id} - {t(row.operation.label)} */}
          {/* {t(operations[row.operation.id])} */}
          {/* {row.alarm !== undefined
            ? 'AL' +
              row.alarm.id +
              ' ' +
              t(`alarms:${row.alarm.i18n?.key}`, row.alarm.i18n?.query, {
                fallback: ['alarms:fallback1', 'fallback2']
              })
            : t(row.operation.label)} */}
          {/* {row.alarm?.id !== 0 &&
            row.alarm !== 0 && */}
          {row.alarm !== undefined &&
            t(`alarms:${row.alarm.i18n?.key}`, row.alarm.i18n?.query, {
              fallback: ['alarms:fallback1', 'fallback2']
            })}
          {/* {row.operation.id !== 1 &&
            row.operation.id !== 2 && */}
          {row.alarm === undefined && t(row.operation.label)}
        </TableCell>
        <TableCell align='center' sx={{ color: color(row.operation.id) }}>
          {/* {row.alarm?.id !== 0 && row.alarm !== 0 && (
            <strong>AL{row.alarm.id}</strong>
          )} */}
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
              .map(row => (
                <Row key={row._id} row={row} />
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
