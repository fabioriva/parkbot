import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function User({ user }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
        <Avatar aria-label="user" className={classes.avatar}>FR</Avatar>
          // <Avatar className={classes.avatar} alt="botts" src="https://avatars.dicebear.com/api/bottts/ParkBotApp.svg" />
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={user.fullName}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Recent activity
        </Typography>
  
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}