import {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Helmet} from 'react-helmet';
import {NavLink, Route, HashRouter} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import Welcome from './Welcome';
import Chat from './Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    'font-family': 'Roboto',
  },
  topbar: {
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
  menuIcon: {
    'font-size': '30pt',
    'margin-top': '14px',
    'margin-left': '10px',
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

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Talk To Me</title>
      </Helmet>
      <HashRouter>
        <div className={classes.topbar}>
          <MenuIcon className={classes.menuIcon}/>
          <Button
            className={classes.title}
            component={NavLink}
            to='/'>
            Talk To Me
          </Button>
          <div></div>
        </div>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
