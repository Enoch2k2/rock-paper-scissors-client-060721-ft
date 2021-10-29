import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';

const UserCard = ({ user, challenging, handleChallenger }) => {
  const currentUser = useSelector(state => state.sessions.currentUser);

  const handleRightClick = (e) => {
    e.preventDefault();
    if(currentUser.id !== user.id) {
      handleChallenger(user);
    }
  }

  const handleChallenge = () => {
    alert(`challenging ${ user.first_name + " " + user.last_name}`)
  }
  return (
    <ListItem button onContextMenu={ handleRightClick }>
      <ListItemText primary={ user.first_name + " " + user.last_name } />
      <ListItemText onClick={ handleChallenge } primary="Make a challenge" style={{ display: challenging ? "block" : "none"}} />
    </ListItem>
  )
}

export default UserCard
