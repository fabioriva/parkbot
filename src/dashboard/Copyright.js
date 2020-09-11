import React from 'react';
import Typography from '@material-ui/core/Typography';
// import MuiLink from '@material-ui/core/Link';
import Link from 'src/dashboard/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="https://www.sotefin.com/">
        Sotefin SA
      </Link>
    </Typography>
  );
}
