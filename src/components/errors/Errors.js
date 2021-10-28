import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Errors = () => {
  const classes = useStyles();
  const errors = useSelector(state => state.errors);

  const errorAlerts = errors.map((error, idx) => (
    <Alert severity="error" key={ idx }>
      { error }
    </Alert>
  ))

  return (
    <div className={classes.root}>
      { errorAlerts }
    </div>
  );
}

export default Errors;