import {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    'background': '#FEFEFE',
    'color': '#333',
    'width': '400px',
    'height': '600px',
    'border-radius': '5px',
    'font-weight': 'bold',
    'font-size': '32pt',
    'display': 'flex', // HELL YEAH FLEXBOX
    'flex-direction': 'column',
  },
  messages: {
    'flex': '1 1 auto',
  }
}));

/**
 * Chat window component - Component to type and display messages
 *
 * @return {object} JSX
 */
function ChatWindow() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.messages}>
        Messages
      </div>
      Chat box
    </Box>
  );
}

export default ChatWindow;
