import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SharedContext from './SharedContext';
import {Helmet} from 'react-helmet';
import {Route, HashRouter} from 'react-router-dom';
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
  const [chatting, setChatting] = useState(false);

  return (
    <div className={classes.root}>
      <SharedContext.Provider value={{
        sidebarOpen, setSidebarOpen,
        chatting, setChatting
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
