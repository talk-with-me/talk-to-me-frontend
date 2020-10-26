import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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

  clientId: string;
  clientSecret: string;

  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.on('queue_complete', this.onQueueComplete);
    this.socket.on('user_connected', this.onUserConnected);
    this.socket.on('user_disconnected', this.onUserDisconnected);
    this.socket.on('message', this.onMessage);
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
      .pipe(map((response: any) => {
        this.clientId = response.userID;
        this.clientSecret = response._id;
        return response;
      }));
  }

  /**
   * Enters the client into a queue.
   *
   * POST /queue
   * {queueType: vent | listen | talk}
   */
  enterQueue(queueType: QueueType = 'talk'): Observable<ApiResponse<QueueCompleteEvent>> {  // todo type of response?
    return this.http.post<ApiResponse<QueueCompleteEvent>>(`${environment.apiUrl}/queue`, {queueType}, this.defaultOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  /**
   * Joins a chat room by ID (given by server).
   *
   * POST /:roomId/me
   * {}
   */
  joinRoom(roomId: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.apiUrl}/${roomId}/me`, {}, this.defaultOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  /**
   * Sends a message to a chat room.
   *
   * @param roomId The ID of the chat room
   * @param content The content of the message
   * @param nonce A nonce to verify delivery
   *
   * POST /:roomId/messages
   * {content: string, nonce: string}
   */
  sendMessage(roomId: string, content: string, nonce: string): Observable<ApiResponse<Message>> {
    return this.http.post<ApiResponse<Message>>(`${environment.apiUrl}/${roomId}/messages`, {content, nonce}, this.defaultOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  /**
   * Leaves a chat room by ID.
   * DELETE /:roomId/me
   */
  leaveRoom(roomId: string): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${environment.apiUrl}/${roomId}/me`, this.defaultOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  // ==== Socket ====
  /**
   * Handles the queue_complete socket event.
   */
  onQueueComplete(...args: any) {
    // todo handle queue being complete
    // probably emit some event? navigate to chat room and send the connect payload?
    this.queueCompleteEmitter.next(args);
  }

  /**
   * Handles the user_connected socket event.
   */
  onUserConnected(...args: any) {
    this.userConnectedEmitter.next();
  }

  /**
   * Handles the user_disconnected socket event.
   */
  onUserDisconnected(...args: any) {
    this.userDisconnectedEmitter.next();
  }

  /**
   * Handles the message socket event.
   */
  onMessage(...args: any) {
    this.messageEmitter.next(args);
  }

  // ==== helpers ====
  ensureAuth(): void {
    if (this.clientSecret) {  // don't do anything if we already have auth
      return;
    }
    this.refreshAuth().subscribe(_ => {
      console.log(`clientId: ${this.clientId}`);
      console.log(`clientSecret: ${this.clientSecret}`);
    });
  }

  defaultOptions(additionalOptions = {}) {
    if (!this.clientSecret) {
      throw new Error('endpoint requires auth but no auth is stored');
    }
    return {
      headers: new HttpHeaders({Authorization: this.clientSecret}),
      ...additionalOptions
    };
  }

  defaultErrorHandler(err: HttpErrorResponse): Observable<ApiResponse<any>> {
    console.error(err);
    return of({...err.error, status: err.status} as ApiResponse<any>);
  }
}
