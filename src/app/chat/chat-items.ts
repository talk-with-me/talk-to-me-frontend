export interface ChatItem {
    id: string;
    type: string;
}

export interface MsgItem extends ChatItem {
    type: 'message';
    msg: string;
    sent: boolean;
    nonce: string;
    sentByMe: boolean;
    liked?: boolean;
}

export interface JoinLeaveItem extends ChatItem {
    type: 'joinleave';
    isJoin: boolean;
}
