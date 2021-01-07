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
 * @return {object} JSX
 */
function ChatWindow() {
  const classes = useStyles();

  var messages = [
    {id: 1, incoming: false, content: 'Hello World!'},
    {id: 2, incoming: true, content: 'Hello There!'},
    {id: 3, incoming: false, content: 'How are you?'},
    {id: 4, incoming: true, content: 'I am good!'},
    {id: 5, incoming: true, content: 'How are you?'},
    {id: 6, incoming: false, content: 'It\'s been rough, but I\'m coming out on top.'},
    {id: 8, incoming: false, content: 'How\'s the weather where you are?'},
    {id: 9, incoming: false, content: 'How\'s the weather where you are?'},
    {id: 10, incoming: false, content: 'How\'s the weather where you are?'},
    {id: 11, incoming: false, content: 'How\'s the weather where you are?'},
    {id: 12, incoming: false, content: 'How\'s the weather where you are?'},
    {id: 13, incoming: false, content: 'How\'s the weather where you are?'},
    {id: 14, incoming: false, content: 'How\'s the weather where you are?'},
  ];

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
