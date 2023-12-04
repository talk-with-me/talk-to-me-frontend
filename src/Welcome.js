import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect } from 'react';

const themeOrange = '#ffa740';
const themeRed = '#f74a61';

const useStyles = makeStyles((theme) => ({
  // Root component for landing page
  content: {
    'padding-top': '80px',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'font-weight': 'bold',
    'font-size': '24pt',
    [theme.breakpoints.down('xs')]:{
      'padding-top': '30px',
      'padding': '20px',
    },
  },
  // "Welcome to Talk To Me" title
  welcomeTitle: {
    'width': '100%',
    'min-width': '500px',
    'text-align': 'center',
    'font-size': '72pt',
    'color': themeOrange,
    [theme.breakpoints.down('sm')]:{
      'font-size': '36pt',
    },
    [theme.breakpoints.down('xs')]:{
      'font-size': '24pt',
    },
  },
  welcomeTitleWithAnimation: {
    'width': '100%',
    'min-width': '500px',
    'text-align': 'center',
    'font-size': '72pt',
    'color': themeOrange,
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
  // Blurb just below main title
  mainBlurb: {
    'width': '800px',
    'padding-top': '40px',
    'color': themeRed,
    'font-size': '32pt',
    'text-align': 'center',
  },
  mainBlurbWithAnimation: {
    'width': '800px',
    'padding-top': '40px',
    'color': themeRed,
    'font-size': '32pt',
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
  // Root component for Q&A section
  qAndASection: {
    'padding-top': '40px',
    'padding-bottom': '80px',
    'max-width': '90vw',
    'font-size': '24pt',
  },
  qAndASectionWithAnimation: {
    'padding-top': '40px',
    'padding-bottom': '80px',
    'max-width': '90vw',
    'font-size': '24pt',
    'animation': '$fadeInQAndA ease 2000ms',
    'animation-delay': '2000ms',
    'animation-fill-mode': 'both',
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
  // Single Q and A row
  oneQAndA: {
    'display': 'flex',
    'min-height': '100px',
  },
  // Special last Q and A row
  lastQAndA: {
    'display': 'flex',
  },
  // Question div
  question: {
    'padding': '10px',
    'padding-right': '20px',
    'border-right': '2px solid ' + themeOrange,
    'flex': '2',
    'color': themeOrange,
    'text-align': 'end',
  },
  // Answer div
  answer: {
    'padding': '10px',
    'padding-left': '20px',
    'flex': '3',
    'color': themeRed,
  },
}));

/**
 * Welcome component - displays welcome message and information
 *
 * @return {object} JSX
 */
function Welcome(props) {
  const classes = useStyles();

  // Set firstLanding to false after first time rendering so animations don't play on subsequent visits
  useEffect(() => {
    if (props.firstLanding.current) {
      props.firstLanding.current = false
    }
  }, [])

  return (
  <div className={classes.content}>
      <div className={props.firstLanding.current ? classes.welcomeTitleWithAnimation : classes.welcomeTitle}>
        Welcome to Talk To Me
      </div>
      <div className={props.firstLanding.current ? classes.mainBlurbWithAnimation : classes.mainBlurb}>
        Your daily dose of wholesome social interaction.
      </div>
      <div className={props.firstLanding.current ? classes.qAndASectionWithAnimation : classes.qAndASection}>
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
            many people experienced feelings of isolation that be could have been helped if they had someone to talk to. Talk To Me was 
            created to provide that.
          </div>
        </div>
        <div className={classes.lastQAndA}>
          <div className={classes.question}>
            How does it work?
          </div>
          <div className={classes.answer}>
            Click the button in the top right to be placed in the matchmaking queue. When a chat partner has been found, you will
            be placed into a chatroom with said person. Please be nice!
          </div>
        </div>
      </div>
  </div>
  );
}

export default Welcome;
