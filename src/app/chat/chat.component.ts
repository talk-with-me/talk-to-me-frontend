import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ChatItem, JoinLeaveItem, MsgItem } from './chat-items';


@Component({
  selector: 'ttm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  joinTrue: JoinLeaveItem = {
    id: 'necessary', type: 'joinleave', isJoin: true
  };
  msgSent: MsgItem = {
    type: 'message', msg: "Put a % first to set sent to false", sent: false, nonce: 'blah', sentByMe: true, id: 'asdf'
  };
  msgReceived: MsgItem = {
    type: 'message', msg: "Put a & first to set sentByMe to false", sent: true, nonce: 'blah', sentByMe: false, id: 'asdf'
  };
  msgSending: MsgItem = {
    type: 'message', msg: 'This message is very long to test how the chat handles long messages and making sure nothing bad happens!', sent: true, nonce: 'blah', sentByMe: true, id: 'asdfa'
  };
  joinFalse: JoinLeaveItem = {
    id: 'necessary', type: 'joinleave', isJoin: false
  };

  chatItemList: ChatItem[] = [
    this.joinTrue,
    this.msgSent,
    this.msgReceived,
    this.msgSending,
  ];

  constructor(private service: AppService) {
    // example implementation
    // this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
  }

  ngOnInit() {
  }

  sendMsg(msg: string) {
    let sentVar = true;
    let receiveVar = true;
    let newMsg = msg;
    if (msg[0] === "%") {
      sentVar = false;
      newMsg = msg.substring(1);
    }
    if (msg[0] === "&") {
      receiveVar = false;
      newMsg = msg.substring(1);
    }
    if (msg !== "") {
      const obj = { id: 'necessary', type: 'message', msg: newMsg, sent: sentVar, nonce: 'blah', sentByMe: receiveVar };
      this.chatItemList.push(obj);
      // this.service.sendMessage(someRoomId, obj.msg, obj.nonce)
    }
  }

  onMessage(incoming: any) {
    // this.msgList.find(msg => msg.nonce === incoming.nonce).sent = true;
  }

}
