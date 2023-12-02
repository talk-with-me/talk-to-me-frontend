import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Chat from './Chat';
import Topbar from './Topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    'font-family': 'Roboto',
    'height': '100%',
  },
  menuIcon: {
    'font-size': '30pt',
    'margin-top': '14px',
    'margin-left': '10px',
    'color': 'white',
  },
  title: {
    'textTransform': 'none',
    'padding-top': '5px',
    'color': 'white',
    'font-weight': '900',
    'font-size': '40pt',
  }
}));

/**
 * Main root component
 *
 * @return {object} JSX
 */
function App() {
  const classes = useStyles();
  const firstLanding = useRef(true);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Talk To Me</title>
      </Helmet>
      <BrowserRouter>
        <Topbar />
        <Route exact path='/'>
          <Welcome firstLanding={firstLanding} />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
