import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const UserCard = ({ user }) => {
  return (
    <ListItem button>
      <ListItemText primary={ user.first_name + " " + user.last_name } />
    </ListItem>
  )
}

export default UserCard
