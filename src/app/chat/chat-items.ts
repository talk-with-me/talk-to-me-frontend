import { Message } from '../schemas/api';

export interface ChatItem {
  id: string;
  type: string;
}

export class MsgItem implements ChatItem {
  type = 'message';
  id: string;
  msg: string;
  sent: boolean;
  nonce: string;
  sentByMe: boolean;
  liked?: boolean;

  constructor(id: string, msg: string, sent: boolean, nonce: string, sentByMe: boolean, liked: boolean = false) {
    this.id = id;
    this.msg = msg;
    this.sent = sent;
    this.nonce = nonce;
    this.sentByMe = sentByMe;
    this.liked = liked;
  }

  static fromApiEvent(event: Message): MsgItem {
    return new MsgItem(event._id, event.content, true, event.nonce, false, false);
  }
}

export interface JoinLeaveItem extends ChatItem {
  type: 'joinleave';
  isJoin: boolean;
  disconnected?: boolean;
}
