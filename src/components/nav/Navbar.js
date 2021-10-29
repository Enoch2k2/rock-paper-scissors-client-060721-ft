import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/sessions';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const currentUser = useSelector(state => state.sessions.currentUser);
  const subscriptions = useSelector(state => state.subscriptions)

  const handleLogout = () => {
    subscriptions.users.perform("offline", { user_id: currentUser.id });
    dispatch(logout());
    // update user to show offline
    // remove the active subscription of users
    history.push("/")
  }

  const loggedOutLinks = () => (
    <>
      <Button component={ NavLink } color="inherit" to="/login">Login</Button>
      <Button component={ NavLink } color="inherit" to="/signup">Signup</Button>
    </>
  )

  const loggedInLinks = () => (
    <>
      <Button color="inherit">{ currentUser ? currentUser.first_name[0] + currentUser.last_name[0] : null }</Button>
      <Button color="inherit" onClick={ () => handleLogout() }>Logout</Button>
    </>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button component={ NavLink } color="inherit" to="/">Flatiron Rock Paper Scissors</Button>
          </Typography>
          { loggedIn ? loggedInLinks() : loggedOutLinks() }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;