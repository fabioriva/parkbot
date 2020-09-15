import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import useComm from 'src/hooks/useComm'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#fafafa',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  toolbarTitle: {
    // flex: 1,
  },
  // toolbarSecondary: {
  //   justifyContent: 'space-between',
  //   overflowX: 'auto',
  // },
  // toolbarLink: {
  //   padding: theme.spacing(1),
  //   flexShrink: 0,
  // },
  // sectionDesktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'flex',
  //   },
  // },

  comm: {
    marginLeft: 'auto'
  },
  online: {
    color: '#52c41a',
    background: '#f6ffed',
    border:' 1px solid #b7eb8f',
    borderRadius: '4px',
    
  },
  offline: {
    color: '#f5222d',
    background: '#fff1f0',
    border: '1px solid #ffa39e',
    borderRadius: '4px',

  },
  
}));

export default function Header({ title, subtitle, socket }) {
  const classes = useStyles();
  const { comm } = useComm(socket)

  return (
    // <div className={classes.sectionDesktop}>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Subscribe</Button> */}

        {/* <Badge color="secondary" badgeContent={'ONLINE'}> */}
          <Breadcrumbs aria-label="breadcrumb">
            <Typography>
              {title}
            </Typography>
            <Typography color="textPrimary">
              {subtitle}
            </Typography>
          </Breadcrumbs>
        {/* </Badge> */}

        <Chip label={comm.isOnline ? 'ONLINE' : 'OFFLINE'} className={clsx(classes.comm, {
            [classes.online]: comm.isOnline,
            [classes.offline]: !comm.isOnline
          })} />

        {/* <Typography
          // component="h1"
          variant="subtitle1"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography> */}
        {/* </Badge> */}
        {/* <Typography variant="subtitle1" gutterBottom>
          {subtitle}
        </Typography> */}
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
        {/* <Chip label={comm.isOnline ? 'ONLINE' : 'OFFLINE'} className={clsx(classes.comm, {
          [classes.online]: comm.isOnline,
          [classes.offline]: !comm.isOnline
        })} /> */}
      </Toolbar>

    // </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
