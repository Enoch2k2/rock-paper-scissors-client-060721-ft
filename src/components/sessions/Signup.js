import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, 
         TextField } from '@material-ui/core'
import { signup } from '../../actions/sessions';
import { clearErrors } from '../../actions/errors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const errors = useSelector(state => state.errors)

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
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

    if( state.password === state.password_confirmation ) {
      /*
        Dispatch an action that will:
          - Fetch to the backend to create the user
          - retrieve either a user or an error
          - if there is a user, redirect to home
          - otherwise display error on signup
      */
      dispatch(signup(state, history))
    } else {
      alert('Password and Password Confirmation Must Match')
    }
  }

  return (
    <Container>
      <h1 style={{ color: "darkblue" }}>Signup</h1>
      <form className={classes.root} autoComplete="off" onSubmit={ handleSubmit }>
          <TextField name="first_name" value={ state.first_name } onChange={ handleChange } id="outlined-basic" label="First Name" variant="outlined" />
          <TextField name="last_name" value={ state.last_name } onChange={ handleChange } id="outlined-basic" label="Last Name" variant="outlined" /><br />
          <TextField name="email" value={ state.email } onChange={ handleChange } id="outlined-basic" label="Email" variant="outlined" type="email" /><br />
          <TextField name="password" value={ state.password } onChange={ handleChange } id="outlined-basic" label="Password" variant="outlined" type="password" />
          <TextField name="password_confirmation" value={ state.password_confirmation } onChange={ handleChange } id="outlined-basic" label="Password Confirmation" variant="outlined" type="password" /><br />
          <Button type="submit" variant="contained" color="primary">Signup</Button>
      </form>
    </Container>
  )
}

export default Signup
