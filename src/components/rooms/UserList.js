import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  onlineUserText: {
    textAlign: "center",
    color: 'white'
  },
  blueBackground: {
    backgroundColor: "#3f51b5"
  },
}));

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


const UserList = () => {
  const classes = useStyles();
  const users = useSelector(state => state.sessions.users);

  const userCards = users.map((user) => <UserCard user={ user } key={ user.id } />)
  return (
    <div className={classes.root}>
      <Box borderRadius="borderRadius" {...defaultProps}>
        <List component="nav" aria-label="secondary mailbox folders">
          { userCards }
        </List>
      </Box>
    </div>
  );
}

export default UserList
