import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MsgItem, WhateverItem} from './msg-item/msg-item';


@Component({
  selector: 'ttm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  default_text = "Type something...";

  constructor(private service: AppService) {
    // example implementation
    this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
  }

  ngOnInit() { }

  msgList: WhateverItem[] = [
    {type: 'joinleave', isJoin: true},
    {type: 'message', msg: 'string', sent: true, nonce: 'blah', sentByMe: true, id: 'asdf'},
    {type: 'message', msg: 'second message', sent: true, nonce: 'blah', sentByMe: false, id: 'asdfa'},
    {type: 'message', msg: 'This is a very long message, testing how it handles when the user types a really long message into the chat. This message has many characters' ,
      sent: true, nonce: 'blah', sentByMe: false, id: 'asdfasd'},
    {type: 'message', msg: 'this one is still sending', sent: false, nonce: 'blah', sentByMe: true, id: 'asdasdadf'},
    {type: 'joinleave', isJoin: false},
  ]

  sendMsg(msg: string) {
    const obj = { msg , sent: false, nonce: 'blah', sentByMe: true};
    // this.msgList.push(obj);
    // this.service.sendMessage(someRoomId, obj.msg, obj.nonce)
  }

  onMessage(incoming: any) {
    // this.msgList.find(msg => msg.nonce === incoming.nonce).sent = true;
  }

}
