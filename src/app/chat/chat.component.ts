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
    type: 'message', msg: 'string', sent: true, nonce: 'blah', sentByMe: true, id: 'asdf'
  };
  msgReceived: MsgItem = {
    type: 'message', msg: 'second message is very long to see how it interacts sandwiched between two other messages', sent: true, nonce: 'blah', sentByMe: false, id: 'asdfa'
  };
  msgSending: MsgItem = {
    type: 'message', msg: 'this one is still sending', sent: false, nonce: 'blah', sentByMe: true, id: 'asdasdadf'
  };
  joinFalse: JoinLeaveItem = {
    id: 'necessary', type: 'joinleave', isJoin: false
  };

  chatItemList: ChatItem[] = [
    this.joinTrue,
    this.msgSent,
    this.msgReceived,
    this.msgSending,
    this.msgSent,
    this.joinFalse,
  ];

  constructor(private service: AppService) {
    // example implementation
    // this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
  }

  ngOnInit() {
  }

  sendMsg(msg: string) {
    const obj = { id: 'necessary', type: 'message', msg: msg, sent: true, nonce: 'blah', sentByMe: true };
    this.chatItemList.push(obj);
    // this.service.sendMessage(someRoomId, obj.msg, obj.nonce)
  }

  onMessage(incoming: any) {
    // this.msgList.find(msg => msg.nonce === incoming.nonce).sent = true;
  }

}
