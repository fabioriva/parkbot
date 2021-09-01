import * as React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Chip from '@material-ui/core/Chip'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default function SystemTable ({ data }) {
  const { t } = useTranslation('dashboard')

  return (
    <Table sx={{ minWidth: 650 }} aria-label='simple table' size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Device</TableCell>
          <TableCell align='center'>Status</TableCell>
          <TableCell align='right'>Operation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow
            key={row.a.name}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              bgcolor: '#fff'
            }}
          >
            <TableCell component='th' scope='row'>
              {row.a.name}
            </TableCell>
            <TableCell align='center'>
              <Chip
                label={t(`common:${row.a.mode.label}`)}
                color={row.a.mode.id === 8 ? 'primary' : 'warning'}
              />
            </TableCell>
            <TableCell align='right'>{row.a.operation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
