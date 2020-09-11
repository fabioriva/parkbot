import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from 'src/dashboard/Copyright';

import { useForm } from "react-hook-form";
import { login } from 'src/lib/auth'

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  // container: {
  //   backgroundImage: 'url(/sotefin_shuttle.jpg)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center'
  // },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const { register, handleSubmit, watch, errors } = useForm();

  const [error, setError] = React.useState(null)

  const onSubmit = async ({ username, password }) => {
    console.log(username, password);
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      if (response.ok) {
        const { aps } = await response.json()
        login({ aps })
      } else {
        const { message } = await response.json()
        console.log(message)
        setError(message)
      }
    } catch (e) {
      console.error('You have an error in your code or there are Network issues.', e)
      throw new Error(e)
    }
  }

  return (
    <div>
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in to ParkBot{'™'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="username"
            name="username"
            label="Username"
            inputRef={register({
              required: true
            })}
            error={errors.username || error ? true : false}
            helperText={error}
          />
          {/* {errors.username && "Username is required"} */}
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            inputRef={register({
              required: true
            })}
            error={errors.password || error ? true : false}
            helperText={error}
          />
          {/* {errors.password && "Password is required"} */}
          <br/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}
