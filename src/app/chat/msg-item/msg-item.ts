export interface WhateverItem {
  id: string;
  type: string;
}

export interface MsgItem extends WhateverItem {
  type: 'message';
  msg: string;
  sent: boolean;
  nonce: string;
  sentByMe: boolean;
  // liked?: boolean;
}

export interface JoinLeaveItem extends WhateverItem {
  type: 'joinleave';
  isJoin: boolean;
}
