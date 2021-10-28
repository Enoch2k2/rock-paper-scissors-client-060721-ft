import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCurrentUser } from './actions/sessions';
import Errors from './components/errors/Errors';
import Navbar from './components/nav/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Home from './components/static/Home';
import Loading from './components/static/Loading';
import Dashboard from './components/rooms/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  const requesting = useSelector(state => state.requesting);
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const [initialStateLoaded, setInitialStateLoaded] = useState(false);

  useEffect(() => {
    if(!initialStateLoaded) {
      dispatch(getCurrentUser(localStorage.getItem('jwt')));
      setInitialStateLoaded(true);
    }
  }, [initialStateLoaded, dispatch])

  if (requesting) {
    return <Loading />
  }

  return (
    <Router>
      <Navbar />
      <Errors />
      <Switch>
        <Route exact path="/" component={ loggedIn ? Dashboard : Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
      </Switch>
    </Router>
  );
}

export default App;
