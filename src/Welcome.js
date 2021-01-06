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
  },
  welcomeTitle: {
    'color': '#ffa740',
    'width': '900px',
  },
  welcomeMessage: {
    'padding-top': '20px',
    'font-size': '24pt',
    'width': '900px',
  },
  chatButton: {
    'margin-top': '30px',
    'border-radius': '30px',
    'background': 'rgba(254,131,67,1)',
    'color': 'white',
    'font-size': '20pt',
    'letter-spacing': '2px',
    'height': '60px',
    'width': '180px',
    '&:hover': {
      'background': 'rgba(254,131,67,1)',
    },
  }
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
      <Button
        variant='contained'
        className={classes.chatButton}
        component={NavLink}
        to='/chat'>
        Chat 
      </Button>
    </div>
  );
}

export default Welcome;
