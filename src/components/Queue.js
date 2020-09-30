import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
// import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 240,
  },
}));

export default function Queue({ queueList }) {
  const classes = useStyles();

  return (
    <List className={classes.root} dense>
      {
        queueList
        .filter(item => item.card !== 0)
        .map((item, key) => (
          <ListItem key={key}>
            <ListItemAvatar>
              <Avatar>
                {item.nr}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Card ${item.card}`}
              secondary={`${item.id}° call`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>)
        )
      }
    </List>
  )
}
