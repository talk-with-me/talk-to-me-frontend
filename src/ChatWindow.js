import {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    'position': 'relative',
    'top': '-100px',
    'flex-grow': '2',
    'margin': 'auto',
    'display': 'flex',
  },
  backButton: {
    'margin-top': '10px',
    'margin-right': '20px',
    'height': '40px',
    'width': '40px',
    'color': '#f74a61',
  },
  backIcon: {
    'height': '40px',
    'width': '40px',
  },
  chatWindow: {
    'width': '100%',
    'height': '100%',
    'background': '#FEFEFE',
    'color': '#333',
    'border-radius': '5px',
    'font-weight': 'bold',
    'font-size': '32pt',
    'display': 'flex', // HELL YEAH FLEXBOX
    'flex-direction': 'column',
    [theme.breakpoints.up('sm')]: {
      'width': '600px',
    },
    [theme.breakpoints.down('xs')]: {
      'top': '-80px',
    }
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
    'background': '#f74a61',
    'display': 'inline-flex',
    'align-self': 'flex-end',
    'color': 'white',
    'padding': '12px',
    'border-radius': '10px',
  },
  theirMessage: {
    'margin': '4px',
    'background': '#EEE',
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

  // Post message request
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
    <div className={classes.root}>
      <IconButton
        className={classes.backButton}
        component={NavLink}
        to='/'>
        <ArrowBackIcon className={classes.backIcon}/>
      </IconButton>
      <Box className={classes.chatWindow}>
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
    </div>
  );
}

export default ChatWindow;
