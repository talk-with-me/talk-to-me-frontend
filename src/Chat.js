import {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ChatWindow from './ChatWindow';
import axios from 'axios';
import io from 'socket.io-client';

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
  },
  waitMessage: {
  },
}));

const api_url = 'http://localhost:8000'; // Only for testing purposes

/**
 * Chat component - Chat page
 *
 * @return {object} JSX
 */
function Chat() {
  const classes = useStyles();
  const [queueStatus, setQueueStatus] = useState('in');
  const [id, setId] = useState('');
  const [secret, setSecret] = useState('');
  const messages = [];
  let socket = null;


  // Queue request
  useEffect(() => {
    /* Commented out while sockets are being worked on
    axios.post(api_url + '/queue')
      .then(request => {
        setId(request.data.data.id);
        setSecret(request.data.data.secret);
        console.log(request.data.data.id, request.data.data.secret);
        socket = io.connect(api_url, {origins: 'http://localhost:8000', transports: ['websocket']})
        socket.on('connect', (() => {socket.emit('register_sid', request.data.data.secret)}));
        socket.on('send_message_to_client', ((message) => {messages.push(message)}));
        socket.on('test', (() => {console.log('emit received')}));
      });
      */
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Talk To Me
      </div>
      {queueStatus == 'out' ?
        <ChatWindow messages={messages}/> :
        <div className={classes.waitMessage}>
          You are now in queue...
        </div>
      }
    </div>
  );
}

export default Chat;
