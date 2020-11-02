import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Socket} from 'ngx-socket-io';
import {Observable, of, Subject} from 'rxjs';
import {environment} from '../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {ApiResponse, Message, QueueCompleteEvent, User} from './schemas/api';


export type QueueType = 'vent' | 'listen' | 'talk';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public queueCompleteEmitter = new Subject<QueueCompleteEvent>();
  public userConnectedEmitter = new Subject();
  public userDisconnectedEmitter = new Subject();
  public messageEmitter = new Subject<Message>();

  public clientId: string;
  clientSecret: string;

  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.on('queue_complete', (event) => this.onQueueComplete(event));
    this.socket.on('user_connected', () => this.onUserConnected());
    this.socket.on('user_disconnected', () => this.onUserDisconnected());
    this.socket.on('send_message_to_client', (arg) => this.onMessage(arg));
  }

  // ==== HTTP ====
  /**
   * Retrieves anonymous auth data from the server.
   *
   * GET /auth
   */
  refreshAuth(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${environment.apiUrl}/auth`)
      .pipe(catchError(this.defaultErrorHandler))
      .pipe(map(response => {
        if (response.success) {
          this.clientId = response.data.userID;
          this.clientSecret = response.data.secret;
          this.hello();
        }
        return response;
      }));
  }

  /**
   * Enters the client into a queue.
   *
   * POST /queue
   * {queueType: vent | listen | talk}
   */
  enterQueue(queueType: QueueType = 'talk'): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.apiUrl}/queue`, {secret: this.clientSecret, queueType})
      .pipe(catchError(this.defaultErrorHandler));
  }

  /**
   * Sends a message to a chat room.
   *
   * @param content The content of the message
   * @param nonce A nonce to verify delivery
   *
   * POST /:roomId/messages
   * {content: string, nonce: string}
   */
  sendMessage(content: string, nonce: string): Observable<ApiResponse<Message>> {
    return this.http.post<ApiResponse<Message>>(`${environment.apiUrl}/messages`,
      {secret: this.clientSecret, message: content, nonce})
      .pipe(catchError(this.defaultErrorHandler));
  }

  // ==== Socket Send ====
  /**
   * Sends a HELLO packet to the server for the backend to associate a socket with a user.
   */
  hello() {
    return this.socket.emit('hello', this.clientSecret);
  }

  /**
   * Joins a chat room by ID (given by server).
   */
  joinRoom() {
    return this.socket.emit('join_room', this.clientSecret);
  }

  /**
   * Leaves a chat room by ID.
   * DELETE /:roomId/me
   */
  leaveRoom(): Observable<ApiResponse<string>> {
    return this.socket.emit('leave_room', this.clientSecret);
  }


  // ==== Socket Recv ====
  /**
   * Handles the queue_complete socket event.
   */
  onQueueComplete(event: QueueCompleteEvent) {
    this.queueCompleteEmitter.next(event);
  }

  /**
   * Handles the user_connected socket event.
   */
  onUserConnected() {
    this.userConnectedEmitter.next();
  }

  /**
   * Handles the user_disconnected socket event.
   */
  onUserDisconnected() {
    this.userDisconnectedEmitter.next();
  }

  /**
   * Handles the message socket event.
   */
  onMessage(message: Message) {
    console.log(message);
    this.messageEmitter.next(message);
  }

  // ==== helpers ====
  ensureAuth(): void {
    this.refreshAuth().subscribe(_ => {
      console.log(`clientId: ${this.clientId}`);
      console.log(`clientSecret: ${this.clientSecret}`);
    });
  }


  defaultErrorHandler(err: HttpErrorResponse): Observable<ApiResponse<any>> {
    console.error(err);
    return of({...err.error, status: err.status} as ApiResponse<any>);
  }
}
