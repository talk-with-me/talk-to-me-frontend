import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    'padding': '80px',
    'color': 'white',
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
    'text-align': 'center',
    'padding-top': '20px',
    'font-size': '24pt',
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
        The purpose of this site is to provide a wholesome, anonymous chat service with the aim of combating the loneliness of quarantine.
      </div>
      <div className={classes.welcomeMessage}>
        We are currently under construction as our frontend is undergoing major changes, so stay tuned!
      </div>
    </div>
  );
}

export default Welcome;
