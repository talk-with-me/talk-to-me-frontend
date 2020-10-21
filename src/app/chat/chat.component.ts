import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MsgItem } from './msg-item/msg-item';


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
    // this.service.messageEmitter.subscribe(msg => this.messages.push(msg));
  }

  ngOnInit() { }

  msgList: MsgItem[] = [
    { msg: 'first message' },
    { msg: 'second message' },
    { msg: 'This is a very long message, testing how it handles when the user types a really long message into the chat. This message has many characters' },
    { msg: 'Testing a long word: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
  ]

  sendMsg(msg: string) {
    this.msgList.push({ msg });
  }

}
