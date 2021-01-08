import {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ChatWindow from './ChatWindow';
import axios from 'axios';
import openSocket from 'socket.io-client';

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

  // Queue request
  useEffect(() => {
    axios.post(api_url + '/queue')
      .then(request => {
        setId(request.data.data.id);
        setSecret(request.data.data.secret);
      });
    const socket = openSocket(api_url);
    socket.emit("hello", {secret: secret});
    console.log(socket);
    socket.on("test", data => {
      console.log("test received");
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Talk To Me
      </div>
      {queueStatus == 'out' ?
        <ChatWindow /> :
        <div className={classes.waitMessage}>
          You are now in queue...
        </div>
      }
    </div>
  );
}

export default Chat;
