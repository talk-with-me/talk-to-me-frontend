import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SharedContext from './SharedContext';
import Button from '@material-ui/core/Button';
import {Helmet} from 'react-helmet';
import {NavLink, Route, HashRouter} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import Welcome from './Welcome';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    'font-family': 'Roboto',
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={classes.root}>
      <SharedContext.Provider value={{
        sidebarOpen, setSidebarOpen
      }}>
        <Helmet>
          <title>Talk To Me</title>
        </Helmet>
        <HashRouter>
          <Sidebar />
          <Topbar />
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/chat'>
            <Chat />
          </Route>
        </HashRouter>
      </SharedContext.Provider>
    </div>
  );
}

export default App;
