import {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ChatWindow from './ChatWindow';

const useStyles = makeStyles((theme) => ({
  root: {
    'margin': '80px',
    'color': 'white',
    'font-weight': 'bold',
    'font-size': '32pt',
  },
  title: {
    'color': '#ffa740',
    'width': '900px',
  }
}));

/**
 * Chat component - Chat page
 *
 * @return {object} JSX
 */
function Chat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Talk To Me
      </div>
      <ChatWindow />
    </div>
  );
}

export default Chat;
