import React from 'react'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { makeStyles } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import LogMessage from 'src/components/history/LogMessage'
import useTranslation from 'next-translate/useTranslation'

// const useStyles = makeStyles({
//   danger: {
//     // backgroundColor: '#f2dede',
//     color: 'rgb(244, 67, 54)' // '#a94442'
//   },
//   success: {
//     // backgroundColor: '#dff0d8',
//     color: 'rgb(102, 187, 106)' // '#3c763d'
//   },
//   warning: {
//     // backgroundColor: '#fcf8e3',
//     color: 'rgb(244, 167, 38)' // '#8a6d3b'
//   },
//   info: {
//     backgroundColor: '#d9edf7',
//     color: 'rgb(41, 182, 246)' // '#31708f'
//   }
// })

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function color (id) {
  switch (id) {
    case 1:
      return 'rgb(244,67,54)'
    case 2:
      return 'rgb(102,187,106)'
    case 3:
      return 'rgb(244,167,38)'
    case 4:
      return 'rgb(41,182,246)'
    // default:
    //   return '#fff' // 'rgba(0, 0, 0, 0.87)'
  }
}

function Row ({ devices, modes, operations, row }) {
  // const classes = useStyles()
  const { t } = useTranslation('history')

  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <StyledTableRow
        sx={{
          '& > *': { borderBottom: 'none' },
          '&:hover': { cursor: 'pointer' }
        }}
        hover
      >
        <StyledTableCell sx={{ py: 0 }}>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell sx={{ py: 0 }} component='th' scope='row'>
          {row.logged}
        </StyledTableCell>
        <StyledTableCell sx={{ py: 0 }} align='left'>
          {/* {row.device.id} - {row.device.id === 0 ? t('dev-operator') : row.device.name} */}
          {row.device.id} - {devices[row.device.id]}
        </StyledTableCell>
        <StyledTableCell sx={{ py: 0 }} align='left'>
          {/* {row.mode.id} - {t(row.mode.label)} */}
          {row.mode.id} - {modes[row.mode.id]}
        </StyledTableCell>
        <StyledTableCell
          sx={{ py: 0, bgcolor: color(row.operation.id) }}
          align='left'
          // className={clsx({
          //   [classes.danger]: row.operation.id === 1,
          //   [classes.success]: row.operation.id === 2,
          //   [classes.warning]: row.operation.id === 3,
          //   [classes.info]: row.operation.id === 4
          // })}
        >
          {/* {row.operation.id} - {t(row.operation.label)} */}
          {t(operations[row.operation.id])}
        </StyledTableCell>
        <StyledTableCell sx={{ py: 0 }} align='center'>
          {row.card}
        </StyledTableCell>
        <StyledTableCell sx={{ py: 0 }} align='center'>
          {row.stall}
        </StyledTableCell>
        <StyledTableCell sx={{ py: 0 }} align='center'>
          {row.size}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow
        sx={{
          borderBottom: 0
        }}
      >
        <StyledTableCell
          sx={{
            borderBottom: open ? '1px solid grey.500' : 'none',
            paddingBottom: 0,
            paddingTop: 0
          }}
          colSpan={8}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='body1' color='text.primary' component='div'>
                <LogMessage item={row} />
              </Typography>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  )
}

export default function HistoryTable ({
  count,
  query,
  devices,
  modes,
  operations
}) {
  const { t } = useTranslation('history')

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

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
            <StyledTableRow>
              <StyledTableCell />
              <StyledTableCell>{t('date')}</StyledTableCell>
              <StyledTableCell align='left'>{t('device')}</StyledTableCell>
              <StyledTableCell align='left'>{t('mode')}</StyledTableCell>
              <StyledTableCell align='left'>{t('operation')}</StyledTableCell>
              <StyledTableCell align='center'>{t('card')}</StyledTableCell>
              <StyledTableCell align='center'>{t('stall')}</StyledTableCell>
              <StyledTableCell align='center'>{t('size')}</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {query
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <Row
                  key={row._id}
                  row={row}
                  devices={devices}
                  modes={modes}
                  operations={operations}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
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
