import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {MsgItem, WhateverItem} from './msg-item/msg-item';
import {generateNonce} from '../utils/random';
import {Router} from '@angular/router';


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

  currentRoomId: string;

  constructor(private service: AppService, private router: Router) {
    // example implementation
    this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
    this.service.userConnectedEmitter.subscribe(msg => this.onUserConnected(msg));
    this.service.userDisconnectedEmitter.subscribe(msg => this.onUserDisconnected(msg));
  }

  ngOnInit() {
  }

  // button handlers
  sendMsg(msg: string) {
    const nonce = generateNonce();
    const dummy: MsgItem = {msg, sent: false, nonce, sentByMe: true, id: null, type: 'message'};
    this.msgList.push(dummy);
    this.service.sendMessage(this.currentRoomId, msg, nonce)
      .subscribe(result => {
        // todo what does this result look like
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
  onMessage(incoming: MsgItem) {
    const existing = this.msgList.find(msg => msg.type === 'message' && msg.nonce === incoming.nonce);
    if (!existing) {
      this.msgList.push(incoming); // transform object?
    }
  }

  onUserConnected() {
    this.msgList.push({type: 'joinleave', isJoin: true});
  }

  onUserDisconnected() {
    this.msgList.push({type: 'joinleave', isJoin: false});
  }
}
