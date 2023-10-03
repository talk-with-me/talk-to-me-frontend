import {makeStyles} from '@material-ui/core/styles';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const useStyles = makeStyles((theme) => ({
  content: {
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
    'height': 'calc(100vh - 70px)',
    'text-align': 'center',
    'font-size': '72pt',
    'flex': '1',
    'min-width': '500px',
    'height': 'calc(100vh - 70px)',
    [theme.breakpoints.down('sm')]:{
      'font-size': '36pt',
    },
    [theme.breakpoints.down('xs')]:{
      'font-size': '24pt',
    },
  },
  questions: {
    'flex': '1',
    'text-align': 'center',
    'min-width': '500px',
    'height': 'calc(100vh - 70px)',
  },
  welcomeMessage: {
    'color': '#f74a61',
    'text-align': 'justify',
    'text-justify': 'inter-word',
    'text-indent': '40pt',
    'padding-top': '20px',
    'font-size': '24pt',
    'font-weight': '500',
    'width': '100%',
    'margin': 'auto',
    'line-height': '50px',
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
  infoIcon: {
    'color': '#f74a61',
  },
  welcomeAndQuestions: {
    'display': 'flex',
    'flex-wrap': 'wrap',
  },
}));

/**
 * Welcome component - displays welcome message and information
 *
 * @return {object} JSX
 */
function Welcome() {
  const classes = useStyles();

  /** 
  return (
    <div className={classes.content}>
      <div className={classes.welcomeTitle}>
        Welcome to Talk To Me,
      </div>
      <div className={classes.welcomeMessage}>
        ... a wholesome, anonymous peer-to-peer text chat service created with the goal of providing
        a safe and secure platform for people to interact and support each other through mutual, supportive
        conversation.
      </div>
      <div className={classes.infoIcon}>
        <AccessibilityIcon />
      </div>
    </div>
  );
  */
 return (
 <div className={classes.content}>
    <div className={classes.welcomeAndQuestions}>
      <div className={classes.welcomeTitle}>
        Welcome to Talk To Me
      </div>
      <div className={classes.questions}>
        What is Talk To Me?
      </div>
    </div>
    <div>
      And here is where more stuff will go!
    </div>
 </div>
 );
}

export default Welcome;
