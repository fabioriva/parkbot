import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Pagination from '@material-ui/lab/Pagination';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));

export default function CardList(props) {
  const classes = useStyles();
  // console.log(props)
  
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(props.cards.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Cards List
        </Typography>
        
        <List className={classes.root}>
          {
            props.cards
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item, key) => {
              const primary = <span>Card {item.nr}</span>
              const secondary = <span>PIN code <strong>{item.code}</strong>, entry valid {item.from} - {item.to}  </span>
              return (
              <ListItem key={key} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    {/* <ImageIcon /> */}
                    {item.nr}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              )
            })
          }
        </List>

        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          // size="small"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </CardContent>
    </Card>
  );
}
