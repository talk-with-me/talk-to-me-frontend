import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';

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
  const [textFieldContent, setTextFieldContent] = useState('');
  const classes = useStyles();
  console.log(props);

  const messages = props['messages'];
  /*
  const messages = [
    {message_id: 1, incoming: false, content: 'Hello World!', liked: false},
  ];
  */

  const sendMessage = ((content) => {
    const message = {
        'message_id': uuidv4(),
        'user_id': props['user_id'],
        'secret': props['secret'],
        'content': content
      };

    console.log(message);
    props['setMessages'](messages.concat([message]));
    axios.post(
      props['api_url'] + '/messages',
      message
    );
  });

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
        variant="outlined"
        onKeyDown= {(event) => {
          if (event.key == 'Enter') {
            console.log(event.target.value);
            sendMessage(event.target.value);
            event.target.value = '';
          }
        }}
      />
    </Box>
  );
}

export default ChatWindow;
