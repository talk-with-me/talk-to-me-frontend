export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  status?: number;
}

export interface User {
  userID: string;
  secret: string;
}

export interface QueueCompleteEvent {
  user_id: string;
}

export interface Message {
  _id: string;
  room_id: string;
  author: string;
  nonce: string;
  content: string;
  timestamp: string;  // iso8601
}

export interface MessageLikedEvent {
  message_id: string;
  user_id: string;
}
