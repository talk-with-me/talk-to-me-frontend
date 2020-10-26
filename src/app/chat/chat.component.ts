import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { generateNonce } from '../utils/random';
import { Router } from '@angular/router';
import { ChatItem, JoinLeaveItem, MsgItem } from './chat-items';
import { Message } from '../schemas/api';


@Component({
  selector: 'ttm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  roomStatus = false;

  joinTrue: JoinLeaveItem = {
    id: 'necessary', type: 'joinleave', isJoin: true
  };
  msgSent: MsgItem = {
    type: 'message', msg: 'Put a % first to set sent to false', sent: false, nonce: 'blah', sentByMe: true, id: 'asdf'
  };
  msgReceived: MsgItem = {
    type: 'message', msg: 'Put a & first to set sentByMe to false', sent: true, nonce: 'blah', sentByMe: false, id: 'asdf'
  };
  msgSending: MsgItem = {
    type: 'message',
    msg: 'This message is very long to test how the chat handles long messages and making sure nothing bad happens!',
    sent: true,
    nonce: 'blah',
    sentByMe: true,
    id: 'asdfa'
  };
  joinFalse: JoinLeaveItem = {
    id: 'necessary', type: 'joinleave', isJoin: false
  };

  chatItemList: ChatItem[] = [
    this.joinFalse,
    // this.joinTrue,
    // this.msgSent,
    // this.msgReceived,
    // this.msgSending,
  ];

  currentRoomId: string;

  constructor(private service: AppService, private router: Router) {
    // example implementation
    this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
    this.service.userConnectedEmitter.subscribe(_ => this.onUserConnected());
    this.service.userDisconnectedEmitter.subscribe(_ => this.onUserDisconnected());
  }

  ngOnInit() {
    this.currentRoomId = this.router.getCurrentNavigation().extras.state.roomId;
    if (this.currentRoomId === undefined) {
      console.warn('navigated to chat but roomId state is null - redirecting to landing');
      this.router.navigate(['/landing']);
    }
  }

  dummySendMsg(msg: string) {
    // code extracted from basic-ui branch, to be changed eventually
    let sentVar = true;
    let receiveVar = true;
    let newMsg = msg;
    if (msg[0] === '%') {
      sentVar = false;
      newMsg = msg.substring(1);
    }
    if (msg[0] === '&') {
      receiveVar = false;
      newMsg = msg.substring(1);
    }
    if (msg[0] === '#') {
      this.roomStatus = !this.roomStatus;
      const obj = { id: 'necessary', type: 'joinleave', isJoin: this.roomStatus };
      this.chatItemList.push(obj);
    }
    if (this.roomStatus) {
      if (msg !== '' && msg[0] !== '#') {
        const obj = { id: 'necessary', type: 'message', msg: newMsg, sent: sentVar, nonce: 'blah', sentByMe: receiveVar };
        this.chatItemList.push(obj);
        this.service.sendMessage(someRoomId, obj.msg, obj.nonce)
      }
    }
  }

  // button handlers
  sendMsg(msg: string) {
    this.dummySendMsg(msg);
    return; // todo remove these lines to use the API

    const nonce = generateNonce();
    const dummy: MsgItem = { msg, sent: false, nonce, sentByMe: true, id: null, type: 'message' };
    this.chatItemList.push(dummy);
    this.service.sendMessage(this.currentRoomId, msg, nonce)
      .subscribe(result => {
        if (result.success) {
          dummy.id = result.data.id;
          dummy.sent = true;
        }
      });
  }

  leaveChat() {
    this.service.leaveRoom(this.currentRoomId)
      .subscribe(() => this.router.navigate(['/landing']));
  }

  // event handlers
  onMessage(incoming: Message) {
    const existing = this.chatItemList.find((msg: MsgItem) => msg.type === 'message' && msg.nonce === incoming.nonce);
    const newMessage = MsgItem.fromApiEvent(incoming);
    if (!existing) {
      this.chatItemList.push(newMessage); // transform object?
    }
  }

  onUserConnected() {
    this.chatItemList.push({ type: 'joinleave', isJoin: true } as JoinLeaveItem);
  }

  onUserDisconnected() {
    this.chatItemList.push({ type: 'joinleave', isJoin: false } as JoinLeaveItem);
  }
}
