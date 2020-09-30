import { makeStyles } from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { format, formatDistance, parseISO } from 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {

  },
  avatar: {

  },
  ce: {
    color: green[600]
  },
  cu: {
    color: red[600]
  },
  pp: {
    color: blue[600]
  },
}));

function text (card, operation, styles) {
  switch (operation) {
    case 5:
      return <span>Card <strong>{card}</strong>, car <strong className={styles.ce}>parked</strong></span> // `Card ${card}, car parked`
    case 6:
      return <span>Card <strong>{card}</strong>, car <strong className={styles.cu}>exited</strong></span> // `Card ${card}, car retrieved`
    case 7:
    case 8:
      return <span>Card <strong>{card}</strong>, car <strong>moved</strong></span> // `Card ${card}, car shuffled`
  }
}

export default function RecentActivity ({user, activity}) {
  const classes = useStyles();

  const { count, dateFrom, dateTo, query } = activity

  return (
    <List className={classes.root} dense>
      {
        query !== undefined &&
        query
        .filter(item => item.operation.id === 5 || item.operation.id === 6 )
        .map((item, key) => (
          <div key={key}>
            <ListItem alignItems="flex-start" key={key}>
              <ListItemAvatar>
                <Avatar
                  alt="initials" 
                  className={classes.avatar}
                  src={`https://avatars.dicebear.com/api/initials/${user.fullName}.svg`}
                  sizes="small"
                />
              </ListItemAvatar>
              <ListItemText
                primary={format(parseISO(item.date), 'yyyy-MM-dd HH:mm:ss')}
                secondary={text(item.card, item.operation.id, classes)}
              />
                <Hidden xsDown> 
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
