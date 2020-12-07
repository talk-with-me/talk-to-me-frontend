import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { generateNonce } from '../utils/random';
import { Router } from '@angular/router';
import { ChatItem, JoinLeaveItem, MsgItem } from './chat-items';
import {Message, MessageLikedEvent, QueueCompleteEvent} from '../schemas/api';


@Component({
  selector: 'ttm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  roomStatus = false;
  showReportUI = false;

  chatItemList: ChatItem[] = [
    { id: null, type: 'joinleave', isJoin: false } as JoinLeaveItem,
  ];

  constructor(private service: AppService, private router: Router) {
    // event emitters
    this.service.queueCompleteEmitter.subscribe(event => this.onQueueComplete(event));
    this.service.messageEmitter.subscribe(msg => this.onMessage(msg));
    this.service.userConnectedEmitter.subscribe(_ => this.onUserConnected());
    this.service.userDisconnectedEmitter.subscribe(_ => this.onUserDisconnected());
    this.service.likeEmitter.subscribe(event => this.onMessageLiked(event));
  }

  ngOnInit() {
    if (!this.service.clientId) {
      this.router.navigate(['/']);
    }
  }

  // button handlers
  sendMsg(msg: string) {
    if (this.roomStatus && msg !== '') {
      const nonce = generateNonce();
      const dummy: MsgItem = { msg, sent: false, nonce, sentByMe: true, id: null, type: 'message', liked: false };
      this.chatItemList.push(dummy);
      this.service.sendMessage(msg, nonce)
        .subscribe(result => {
          if (result.success) {
            dummy.id = result.data._id;
            dummy.sent = true;
          }
        });

    }
  }

  likeMsg(messageId: string) {
    const existing = this.findMessage((msg) => msg.id === messageId);
    if (!existing) {
      console.warn('could not find message to like');
      return;
    }
    existing.liked = true;
    this.service.likeMessage(messageId)
      .subscribe(response => {
        if (!response.success) {
          console.warn(`failed to like message ${messageId}: ${response.error}`);
          existing.liked = false;
        }
      });
  }

  leaveChat() {
    this.service.leaveRoom();
    this.router.navigate(['/landing']);
  }

  report() {
    this.showReportUI = !this.showReportUI;
  }

  // event handlers
  onQueueComplete(event: QueueCompleteEvent) {
    if (event.user_id === this.service.clientId) {
      this.service.joinRoom();
    }
  }

  onMessage(incoming: Message) {
    const existing = this.findMessage((msg) => msg.nonce === incoming.nonce);
    const newMessage = MsgItem.fromApiEvent(incoming);
    if (!existing) {
      this.chatItemList.push(newMessage); // transform object?
    }
  }

  onUserConnected() {
    this.roomStatus = true;
    this.chatItemList.push({ type: 'joinleave', isJoin: true, disconnected: false } as JoinLeaveItem);
  }

  onUserDisconnected() {
    this.roomStatus = false;
    this.chatItemList.push({ type: 'joinleave', isJoin: false, disconnected: true } as JoinLeaveItem);
  }

  onMessageLiked(event: MessageLikedEvent) {
    const existing = this.findMessage((msg) => msg.id === event.message_id);
    if (!existing) {
      return;
    }
    existing.liked = true;
    console.log(`found liked message ${existing.id}`);
  }

  // helpers
  findMessage(predicate: (msg: MsgItem) => boolean): MsgItem {
    return this.chatItemList.find((msg: MsgItem) => msg.type === 'message' && predicate(msg)) as MsgItem;
  }
}
