import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, 
         TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions/sessions';
import { clearErrors } from '../../actions/errors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const errors = useSelector(state => state.errors);

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if(loggedIn) {
      history.push("/")
    }

    return () => {
      dispatch(clearErrors());
    }
  }, [loggedIn])

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(login(state, history));
  }

  return (
    <Container>
      <h1 style={{ color: "darkblue" }}>Login</h1>
      <form className={classes.root} autoComplete="off" onSubmit={ handleSubmit }>
          <TextField name="email" value={ state.email } onChange={ handleChange } id="outlined-basic" label="Email" variant="outlined" type="email" /><br />
          <TextField name="password" value={ state.password } onChange={ handleChange } id="outlined-basic" label="Password" variant="outlined" type="password" /><br />
          <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  )
}

export default Login;
