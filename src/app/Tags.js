import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { green, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  avatar: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
}));

export default function User({ user, cards, handleOpen }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
        cards
        .filter(item => user.cards.includes(item.nr))
        .map((item, key) => (
          <div key={key}>
            <ListItem alignItems="flex-start" key={key}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {item.nr}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`Card ${item.nr}`}
                secondary={item.status === 0 ? 'Available' : 'Valid for exit'}
              />
              {item.status !== 0 &&
              <ListItemSecondaryAction>
                {/* <IconButton edge="end" aria-label="exit" color="primary" onClick={handleOpen}>
                  <DirectionsCarIcon />
                </IconButton> */}
                <Button
                  variant="contained"
                  color="primary"
                  // size="small"
                  // className={classes.button}
                  startIcon={<DirectionsCarIcon />}
                  onClick={handleOpen}
                >
                  Exit
                </Button>
              </ListItemSecondaryAction>
              }
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>)
        )
      }
    </List>
  );
}
