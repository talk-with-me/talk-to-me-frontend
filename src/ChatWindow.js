import {makeStyles} from '@material-ui/core/styles';
import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles((theme) => ({
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    "50%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    }
  },
  root: {
    'position': 'relative',
    'top': '-105px',
    'flex-grow': '2',
    'margin': 'auto',
    'display': 'flex',
    'animation': '$fadeIn ease 3000ms',
    [theme.breakpoints.down('xs')]: {
      'flex-direction': 'column',
      'width': '100%',
    }
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
    'background': '#FEFEFE',
    'color': '#333',
    'border-radius': '5px',
    'font-weight': 'bold',
    'font-size': '32pt',
    'display': 'flex', // HELL YEAH FLEXBOX
    'flex-direction': 'column',
    'flex-grow': '1',
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
    'height': '100%',
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
  disconnectMessage: {
    'display': 'inline-flex',
    'align-self': 'center',
    'color':'#888',
    'padding':'10px',
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
  const socket = props['socket'];
  const [partnerDisconnected, setPartnerDisconnected] = useState(false);

  // Set up listener for partner disconnect
  useEffect(() => {
    socket.on('user_disconnected', (() => {setPartnerDisconnected(true)}));
  });

  // Called right before component unmounts, user leaving chat window
  useEffect(() => {
    return () => { 
      socket.disconnect();
    }
  }, [socket]);

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
        onClick={() => props['socket'].disconnect()}
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
          {partnerDisconnected ? <div className={classes.disconnectMessage}>Partner has disconnected</div> : <></>}
        </div>
        <InputBase className={classes.inputBox}
          placeholder="Send a message!"
          variant="outlined"
          onKeyDown= {(event) => {
            if (event.key === 'Enter') {
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
