import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import { format, formatDistance, parseISO } from 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {

  },
  avatar: {
    // fontSize: 14,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    fontSize: 14,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    fontSize: 14,
  },
}));

function avatar (item, styles) {
  // const classes = useStyles();

  switch (item.device.id) {
    case 0:
      return <Avatar className={styles.orange}><PersonIcon /></Avatar>
    default:
      return <Avatar className={styles.purple}>{item.device.name}</Avatar>
  }
}

function text (item) {
  switch (item.operation.id) {
    case 1:
      return <span>AL{item.alarm.id} ON</span>
    case 2:
      return <span>AL{item.alarm.id} OFF</span>
    case 3:
      return <span>{item.mode.info} switch</span>
    case 5:
      return <span>Card <strong>{item.card}</strong>, car parked</span> // `Card ${card}, car parked`
    case 6:
      return <span>Card <strong>{item.card}</strong>, car exited</span> // `Card ${card}, car retrieved`
    case 7:
    case 8:
      return <span>Card <strong>{item.card}</strong>, car shuffled</span> // `Card ${card}, car shuffled`
    default:
      return <span>{item.operation.info}</span>
  }
}

export default function RecentActivity ({ query }) {
  const classes = useStyles();

  console.log(query[0])

  return (
    <List className={classes.root} dense>
      {
        query !== undefined &&
        query
        // .filter(item => item.operation.id === 5 || item.operation.id === 6 )
        .slice(0, 10)
        .map((item, key) => (
          <div key={key}>
            <ListItem alignItems="flex-start" key={key}>
              <ListItemAvatar>
                {avatar(item, classes)}
              </ListItemAvatar>
              <ListItemText
                primary={format(parseISO(item.date), 'yyyy-MM-dd HH:mm:ss')}
                secondary={text(item)}
              />
                <Hidden smDown> 
                  <ListItemSecondaryAction>
                    <div>{formatDistance(new Date(item.date), new Date(), { addSuffix: true })}</div>
                  </ListItemSecondaryAction>  
                </Hidden>         
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>)
        )
      }
    </List>
  );
}
