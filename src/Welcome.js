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
    'animation': '$fadeInTitle ease 2000ms',
    'animation-delay': '500ms',
    'animation-fill-mode': 'both',
    [theme.breakpoints.down('sm')]:{
      'font-size': '36pt',
    },
    [theme.breakpoints.down('xs')]:{
      'font-size': '24pt',
    },
  },
  "@keyframes fadeInTitle": {
    "0%": {
      opacity: 0,
      transform: "translateY(-70%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    }
  },
  mainBlurb: {
    'padding-top': '40px',
    'color': themeRed,
    'width': '800px',
    'text-align': 'center',
    'animation': '$fadeInMainBlurb ease 2000ms',
    'animation-delay': '1500ms',
    'animation-fill-mode': 'both',
  },
  "@keyframes fadeInMainBlurb": {
    "0%": {
      opacity: 0,
      transform: "translateY(-40%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    }
  },
  welcomeAndQuestions: {
    'display': 'flex',
    'flex-wrap': 'wrap',
  },
  qAndASection: {
    'padding-top': '40px',
    'font-size': '24pt',
    'padding-bottom': '80px',
    'animation': '$fadeInQAndA ease 2000ms',
    'animation-delay': '2000ms',
    'animation-fill-mode': 'both',
    'max-width': '90vw'
  },
  "@keyframes fadeInQAndA": {
    "0%": {
      opacity: 0,
      transform: "translateY(-10%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    }
  },
  oneQAndA: {
    'display': 'flex',
    'min-height': '100px',
  },
  lastQAndA: {
    'display': 'flex',
  },
  question: {
    'color': themeOrange,
    'flex': '2',
    'text-align': 'end',
    'padding': '10px',
    'padding-right': '20px',
    'border-right': '2px solid ' + themeOrange
  },
  answer: {
    'color': themeRed,
    'flex': '3',
    'padding': '10px',
    'padding-left': '20px',
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
          Talk To Me is an anonymous peer-to-peer text chat service.
        </div>
      </div>
      <div className={classes.oneQAndA}>
        <div className={classes.question}>
          What is the purpose of Talk To Me?
        </div>
        <div className={classes.answer}>
          Talk To Me was created as a place for people to come to, to just talk to someone else. During the COVID-19 pandemic,
          many people experienced feelings of isolation that be could have been helped if they just had someone to talk to. Talk To Me was 
          created to provide that.
        </div>
      </div>
      <div className={classes.lastQAndA}>
        <div className={classes.question}>
          How does it work?
        </div>
        <div className={classes.answer}>
          Click the button in the top right to be placed in the matchmaking queue. When a chat partner has been found, you will
          be placed into a chatroom with said person. Be nice!
        </div>
      </div>
    </div>
 </div>
 );
}

export default Welcome;
