import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
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
  },
});

export default function CardsTable({ cards }) {
  const classes = useStyles();
  console.log(cards)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="history">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>PIN</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, key) => (
            <TableRow
              key={key}
              // className={clsx({
              //   [classes.danger]: row.operation.id == 1,
              //   [classes.success]: row.operation.id == 2,
              //   [classes.warning]: row.operation.id === 3,
              //   [classes.info]: row.operation.id === 4,
              // })}
            >
              <TableCell component="th" scope="row">
                {row.nr}
              </TableCell>
              <TableCell >{row.code}</TableCell>
              <TableCell >{row.from}</TableCell>
              <TableCell >{row.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={cards.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
    </React.Fragment>
  );
}