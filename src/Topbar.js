import React from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    'width': '100%',
    'height': '70px',
    'background': 'radial-gradient(circle, rgba(254,131,67,1) 0%, rgba(248,74,98,1) 100%)',
    'border-radius': '2px',
    'color': 'white',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'display': 'flex',
    'justify-content': 'space-between',
  },
  title: {
    'margin-left': '20px',
    'textTransform': 'none',
    'color': 'white',
    'font-weight': '900',
    'font-size': '24pt',
  },
  menuButton: {
    'margin-left': '10px',
    'display': 'none', // Hides the button
  },
  menuIcon: {
    'color': 'white',
    'height': '30px',
    'width': '30px',
  },
  chatButton: {
    'font-family': 'Roboto',
    'margin-top': '14px',
    'margin-right': '15px',
    'border-radius': '30px',
    'background': 'rgba(254,131,67,1)',
    'color': 'white',
    'font-size': '12pt',
    'font-weight': '600',
    'height': '40px',
    'width': '120px',
    '&:hover': {
      'background': 'rgba(254,131,67,1)',
    },
    'textTransform': 'none',
  }
}));

/**
 * Top bar component
 *
 * @return {object} JSX
 */
function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.title}
        component={NavLink}
        to='/'
        >
        Talk To Me
      </Button>
      {/* Only display button outside of /chat route */}
      <Route
        path="\/([^c][^h][^a][^t].*|.{0,3})">
        <Button
          variant='contained'
          className={classes.chatButton}
          component={NavLink}
          to='/chat'>
          Let's Talk 
        </Button>
      </Route>
    </div>
  );
}

export default Topbar;
