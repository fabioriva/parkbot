import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import DeleteIcon from '@material-ui/icons/Delete';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

import Queue from 'src/components/Queue'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
  },
  // cardHeader: {
  //   backgroundColor: '#e0e0e0',
  //   padding: '8px 16px'
  // },
  // cardHeadertitle: {
  //   // color: '#000',
  //   fontSize: '16px',
  //   // fontWeight: 'bolder',
  // },
  title: {
    fontSize: 16,
    color: '#000'
  },
}));

export default function ExitQueue(props) {
  const classes = useStyles();

  const {
    queueList,
    exitButton
  } = props.exitQueue

  return (
    <Card className={classes.root}>
      {/* <CardHeader
        className={classes.cardHeader}
        title={'Exit Queue'}
        subheader={new Intl.DateTimeFormat("en-US").format(new Date())}
        classes={{
          title: classes.cardHeadertitle,
        }}
      /> */}
      <CardContent className={clsx({
        [classes.cardContent]: true,
      })}>
        {/* <List className={classes.root} dense>
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
                <ListItemText primary={`Card ${item.card}`} secondary={`${item.id}° call`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>)
            )
          }
        </List> */}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Exit Queue
        </Typography>
        <Queue queueList={queueList} />
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label="ready">
          <DirectionsCarIcon disabled={!exitButton.enable.status} />
        </IconButton> */}
        <Button
          size="small"
          color="primary"
          startIcon={<DirectionsCarIcon />}
          // disabled={!exitButton.enable.status}
          onClick={props.onOpen}
        >
          Exit Car
        </Button>
      </CardActions>
    </Card>

  )
}
