import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Socket} from 'ngx-socket-io';
import {Observable, Subject} from 'rxjs';
import {environment} from '../environments/environment';


export type QueueType = 'vent' | 'listen' | 'talk';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public queueCompleteEmitter = new Subject();
  public userConnectedEmitter = new Subject();
  public userDisconnectedEmitter = new Subject();
  public messageEmitter = new Subject();

  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.on('queue_complete', this.onQueueComplete);
    this.socket.on('user_connected', this.onUserConnected);
    this.socket.on('user_disconnected', this.onUserDisconnected);
    this.socket.on('message', this.onMessage);
  }

  // ==== HTTP ====
  /**
   * Enters the client into a queue.
   *
   * POST /queue
   * {queueType: vent | listen | talk}
   */
  enterQueue(queueType: QueueType = 'talk'): Observable<any> {  // todo type of response?
    return this.http.post(`${environment.apiUrl}/queue`, {queueType});
  }

  /**
   * Joins a chat room by ID (given by server).
   *
   * POST /:roomId/me
   * {}
   */
  joinRoom(roomId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${roomId}/me`, {});
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
  sendMessage(roomId: string, content: string, nonce: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${roomId}/messages`, {content, nonce});
  }

  /**
   * Leaves a chat room by ID.
   * DELETE /:roomId/me
   */
  leaveRoom(roomId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${roomId}/me`);
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
}
