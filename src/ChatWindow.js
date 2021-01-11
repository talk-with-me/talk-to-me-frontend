import {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';

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
    'padding': '10px',
    'overflow': 'scroll',
  },
  myMessage: {
    'margin': '4px',
    'background': '#361999',
    'display': 'inline-flex',
    'align-self': 'flex-end',
    'color': 'white',
    'padding': '12px',
    'border-radius': '10px',
  },
  theirMessage: {
    'margin': '4px',
    'background': '#DDD',
    'display': 'inline-flex',
    'align-self': 'flex-start',
    'color': 'black',
    'padding': '12px',
    'border-radius': '10px',
  },
  inputBox: {
    'padding': '5px',
  }
}));

/**
 * Chat window component - Component to type and display messages
 *
 * @param {Map} props - props given to component
 * @return {object} JSX
 */
function ChatWindow(props) {
  const classes = useStyles();
  console.log(props);

  const messages = props['messages'];
  /*
  const messages = [
    {message_id: 1, incoming: false, content: 'Hello World!', liked: false},
  ];
  */

  return (
    <Box className={classes.root}>
      <div className={classes.messages}>
        {messages.map(message => (
          <div 
            key={message.id} 
            className={message.incoming ? classes.theirMessage : classes.myMessage}>
            {message.content}
          </div>
        ))}
      </div>
      <InputBase className={classes.inputBox}
        placeholder="Send a message!"
        variant="outlined"/>
    </Box>
  );
}

export default ChatWindow;
