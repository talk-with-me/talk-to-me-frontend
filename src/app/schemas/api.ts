export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  status?: number;
}

export interface User {
  userId: string;
  userSecret: string;
}

export interface QueueCompleteEvent {
  roomId: string;
  userId: string;
}

export interface Message {
  id: string;
  authorId: string;
  roomId: string;
  nonce: string;
  content: string;
  timestamp: string;  // iso8601
}
