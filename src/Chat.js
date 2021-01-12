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
        Talk To Me
      </div>
      {queueStatus === 'out' ?
        <ChatWindow messages={messages} setMessages={setMessages} user_id={id} secret={secret} api_url={api_url}/> :
        <div className={classes.waitMessage}>
          You are now in queue...
        </div>
      }
    </div>
  );
}

export default Chat;
