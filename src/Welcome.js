import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    'padding': '80px',
    'font-weight': 'bold',
    'font-size': '32pt',
    [theme.breakpoints.down('xs')]:{
      'padding-top': '30px',
      'padding': '20px',
    },
  },
  welcomeTitle: {
    'color': '#ffa740',
    'width': '100%',
    'text-align': 'center',
    'font-size': '48pt',
    [theme.breakpoints.down('sm')]:{
      'font-size': '36pt',
    },
    [theme.breakpoints.down('xs')]:{
      'font-size': '24pt',
    },
  },
  welcomeMessage: {
    'color': '#f74a61',
    'text-align': 'center',
    'padding-top': '20px',
    'font-size': '24pt',
    'font-weight': '500',
    'width': '100%',
    'margin': 'auto',
    [theme.breakpoints.up('md')]:{
      'padding-top': '40px',
      'width': '900px',
    },
    [theme.breakpoints.down('sm')]:{
      'font-size': '20pt',
    },
    [theme.breakpoints.down('xs')]:{
      'font-size': '16pt',
    },
  },
}));

/**
 * Welcome component - displays welcome message and information
 *
 * @return {object} JSX
 */
function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.welcomeTitle}>
        Welcome to Talk To Me
      </div>
      <div className={classes.welcomeMessage}>
        A wholesome, anonymous chat service.
      </div>
      <div className={classes.welcomeMessage}>
        Pardon the dust, our website is under construction!
      </div>
    </div>
  );
}

export default Welcome;
