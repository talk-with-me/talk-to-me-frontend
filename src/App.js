import {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Helmet} from 'react-helmet';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

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
    'padding-top': '5px',
    'color': 'white',
    'font-weight': '900',
    'font-size': '40pt',
  },
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
      <div className={classes.topbar}>
        <MenuIcon className={classes.menuIcon}/>
        <div className={classes.title}>Talk To Me</div>
        <div></div>
      </div>
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
    </div>
  );
}

export default App;
