import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {MsgItem, WhateverItem} from './msg-item/msg-item';
import {generateNonce} from '../utils/random';


@Component({
  selector: 'ttm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  msgList: WhateverItem[] = [
    {type: 'joinleave', isJoin: true},
    {type: 'message', msg: 'string', sent: true, nonce: 'blah', sentByMe: true, id: 'asdf'},
    {type: 'message', msg: 'second message', sent: true, nonce: 'blah', sentByMe: false, id: 'asdfa'},
    {
      type: 'message',
      msg: 'This is a very long message, testing how it handles when the user types a really long message into the chat. This message has many characters',
      sent: true,
      nonce: 'blah',
      sentByMe: false,
      id: 'asdfasd'
    },
    {type: 'message', msg: 'this one is still sending', sent: false, nonce: 'blah', sentByMe: true, id: 'asdasdadf'},
    {type: 'joinleave', isJoin: false},
  ];

  constructor(private service: AppService) {
    // example implementation
    this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
  }

  ngOnInit() {
  }

  sendMsg(msg: string) {
    const nonce = generateNonce();
    const dummy: MsgItem = {msg, sent: false, nonce, sentByMe: true, id: null, type: 'message'};
    this.msgList.push(dummy);
    this.service.sendMessage('someRoomId', msg, nonce)
      .subscribe(result => {
        if (result.success) {
          dummy.id = result.data.id;
          dummy.sent = true;
        }
      });
  }

  onMessage(incoming: any) {
    const existing = this.msgList.find(msg => msg.type === 'message' && msg.nonce === incoming.nonce);
    if (!existing) {
      this.msgList.push(incoming); // transform object?
    }
  }

}
