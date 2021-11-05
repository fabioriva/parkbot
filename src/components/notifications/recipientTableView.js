import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function RecipientTableView ({ mailingList }) {
  const handleSelectClick = event => {
    if (event.target.checked) {
      console.log('selected', event.target.checked)
      return
    }
    console.log('!!!!')
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='mailing list'>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>E-mail address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Enabled</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mailingList.map(row => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='left'>{row.email}</TableCell>
              <TableCell align='left'>{row.phone}</TableCell>
              <TableCell padding='checkbox'>
                <Checkbox
                  disabled
                  color='primary'
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={row.status}
                  onChange={handleSelectClick}
                  inputProps={{
                    'aria-label': 'select all desserts'
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
