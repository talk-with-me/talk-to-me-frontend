import {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ChatWindow from './ChatWindow';
import axios from 'axios';
import io from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
  root: {
    'margin': '20px',
    'color': 'white',
    'font-weight': 'bold',
    'font-size': '32pt',
    'display': 'flex',
    'flex-direction': 'column',
    'height': 'calc(100vh - 130px)',
  },
  title: {
    'color': '#ffa740',
    'width': '900px',
  },
  waitMessage: {
    'padding-top': '40px',
    'color': '#ffa740',
    'text-align': 'center',
    'font-size': '32pt',
    [theme.breakpoints.down('xs')]: {
      'font-size': '20pt',
    }
  },
}));

const api_url = 'https://api.talk-to-me.co'; // Only for testing purposes
//const api_url = 'https://localhost'; // Only for testing purposes

/**
 * Chat component - Chat page
 *
 * @return {object} JSX
 */
function Chat() {
  const classes = useStyles();
  const [queueStatus, setQueueStatus] = useState('in');
  const [id, setId] = useState(null);
  const [secret, setSecret] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  // Queue request and socket connection on component mount
  useEffect(() => {
    axios.post(api_url + '/queue')
      .then(request => {
        setSocket(io.connect(api_url, {origins: 'http://localhost:8000', transports: ['websocket']}));
        setId(request.data.data.id);
        setSecret(request.data.data.secret);
        console.log(request.data.data.id, request.data.data.secret);
      });
  }, []);

  useEffect(() => {
    if (socket && secret && id) {
      socket.on('connect', (() => {socket.emit('register_sid', secret)}));
      socket.on('queue_complete', (() => {
        console.log('queue complete');
        socket.emit('join_room', secret);
        setQueueStatus('out');
      }));
      socket.on('send_message_to_client', ((message) => {
        setMessages(messages.concat([message]));
      }));
    }
  }, [secret, id, socket, messages]);

  // Update children components when messages are added or deleted
  useEffect(() => {
    console.log("rerendering with following messages:", messages);
  }, [messages]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
      </div>
      {queueStatus === 'out' ?
        <div className={classes.waitMessage}>
          Match found!
        </div> :
        <div className={classes.waitMessage}>
          Finding the perfect match...
        </div>
      }
      {queueStatus === 'out' ?
        <ChatWindow messages={messages} setMessages={setMessages} user_id={id} secret={secret} api_url={api_url}/> :
        <div />
      }
    </div>
  );
}

export default Chat;
