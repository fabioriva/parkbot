import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    marginBottom: theme.spacing(3),
    background: 'transparent'
  },
  container: {
    // paddingBottom: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
  },
}));

export default function UserHero({ user }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="outlined" elevation={0}>
      <Box
        display="flex"
        flexDirection="row"
        className={classes.container}
        alignItems="center" p={1}
      >
        <Box p={1}>
          <Avatar
            alt="initials" 
            className={classes.avatar}
            src={`https://avatars.dicebear.com/api/initials/${user.fullName}.svg`}
          />
        </Box>
        <Box p={1}>
          <Typography
            className={classes.title}
            variant="h6"
          >
            {user.fullName}
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="subtitle1"
            color="textSecondary"
          >
            {new Intl.DateTimeFormat("en-US").format(new Date())}
          </Typography>
        </Box>
        <Box p={1} alignSelf="flex-start">
          <Chip label="USER" variant="outlined" />
        </Box>
      </Box>
      
    </Paper>
  )
}
