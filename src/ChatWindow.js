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
    'display': 'flex',
    'flex-direction': 'column',
    'font-size': '14pt',
  },
  myMessage: {
    'margin': '10px',
    'background': '#361999',
    'display': 'inline-flex',
    'align-self': 'flex-end',
    'color': 'white',
    'padding': '15px',
    'border-radius': '10px',
  },
  theirMessage: {
    'margin': '10px',
    'background': '#DDD',
    'display': 'inline-flex',
    'align-self': 'flex-start',
    'color': 'black',
    'padding': '15px',
    'border-radius': '10px',
  },
}));

/**
 * Chat window component - Component to type and display messages
 *
 * @return {object} JSX
 */
function ChatWindow() {
  const classes = useStyles();

  var messages = [
    {id: 1, incoming: false, content: 'Hello World!'},
    {id: 2, incoming: true, content: 'Hello There!'}
  ];

  return (
    <Box className={classes.root}>
      <div className={classes.messages}>
        {messages.map(message => (
          <div className={message.incoming ? classes.theirMessage : classes.myMessage}>
            {message.content}
          </div>
        ))}
      </div>
      Chat box
    </Box>
  );
}

export default ChatWindow;
