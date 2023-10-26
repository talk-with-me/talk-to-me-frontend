import {makeStyles} from '@material-ui/core/styles';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const themeOrange = '#ffa740';
const themeRed = '#f74a61';

const useStyles = makeStyles((theme) => ({
  content: {
    'padding-top': '80px',
    'font-weight': 'bold',
    'font-size': '32pt',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    [theme.breakpoints.down('xs')]:{
      'padding-top': '30px',
      'padding': '20px',
    },
  },
  welcomeTitle: {
    'color': themeOrange,
    'width': '100%',
    'text-align': 'center',
    'font-size': '72pt',
    'min-width': '500px',
    [theme.breakpoints.down('sm')]:{
      'font-size': '36pt',
    },
    [theme.breakpoints.down('xs')]:{
      'font-size': '24pt',
    },
  },
  mainBlurb: {
    'padding-top': '40px',
    'color': themeRed,
    'width': '800px',
    'text-align': 'center',
  },
  welcomeAndQuestions: {
    'display': 'flex',
    'flex-wrap': 'wrap',
  },
  qAndASection: {
    'padding-top': '320px',
    'font-size': '24pt',
  },
  oneQAndA: {
    'display': 'flex',
    'min-height': '160px',
  },
  question: {
    'color': themeOrange,
    'flex': '1',
    'text-align': 'end',
    'padding': '10px',
  },
  answer: {
    'color': themeRed,
    'flex': '1',
    'padding': '10px',
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
    <div className={classes.welcomeTitle}>
      Welcome to Talk To Me
    </div>
    <div className={classes.mainBlurb}>
      Your daily dose of wholesome social interaction.
    </div>
    <div className={classes.qAndASection}>
      <div className={classes.oneQAndA}>
        <div className={classes.question}>
          What is Talk To Me?
        </div>
        <div className={classes.answer}>
          Talk To Me is an anonymous text chat service.
        </div>
      </div>
      <div className={classes.oneQAndA}>
        <div className={classes.question}>
          What is the purpose of Talk To Me?
        </div>
        <div className={classes.answer}>
          The purpose of Talk To Me is to give people a way to express their emotions and interact with someone anonymous, to provide positivity to their life.
        </div>
      </div>
      <div className={classes.oneQAndA}>
        <div className={classes.question}>
          Is Talk To Me a therapy service?
        </div>
        <div className={classes.answer}>
          No, we do not recommend using Talk To Me in place of therapy. 
        </div>
      </div>
    </div>
 </div>
 );
}

export default Welcome;
