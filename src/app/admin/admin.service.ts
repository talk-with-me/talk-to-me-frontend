import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ApiResponse, Message} from '../schemas/api';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Ban, Report} from '../schemas/admin';

const adminBase = `${environment.apiUrl}/admin`;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {

  }

  // ==== HTTP ====
  doAdminAuth(password: string): Observable<ApiResponse<{ authorization: string }>> {
    return this.http.post<ApiResponse<{ authorization: string }>>(`${adminBase}/auth`, {password})
      .pipe(catchError(this.defaultErrorHandler))
      .pipe(map(response => {
        if (response.success) {
          this.setAdminToken(response.data.authorization);
        }
        return response;
      }));
  }

  getReports(): Observable<ApiResponse<Report[]>> {
    return this.http.get<ApiResponse<Report[]>>(`${adminBase}/reports`, this.defaultAuthOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  getReportedMessages(roomId: string): Observable<ApiResponse<Message[]>> {
    return this.http.get<ApiResponse<Message[]>>(`${adminBase}/reports/${roomId}/messages`, this.defaultAuthOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  banUser(roomId: string, reason: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${adminBase}/banuser`, {room_id: roomId, reason}, this.defaultAuthOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  getBans(): Observable<ApiResponse<Ban[]>> {
    return this.http.get<ApiResponse<Ban[]>>(`${adminBase}/bannedusers`, this.defaultAuthOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  unbanUser(ip: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${adminBase}/unbanuser`, {ip}, this.defaultAuthOptions())
      .pipe(catchError(this.defaultErrorHandler));
  }

  // ==== public helpers ====
  isAuthed() {
    return this.getAdminToken() !== null;
  }

  // ==== internal helpers ====
  defaultErrorHandler(err: HttpErrorResponse): Observable<ApiResponse<any>> {
    console.error(err);
    if (err.status === 403) {
      this.clearAdminToken();
    }
    return of({...err.error, status: err.status} as ApiResponse<any>);
  }

  defaultAuthOptions(additionalOptions?): { headers: any } {
    return {headers: {Authorization: this.getAdminToken()}, ...additionalOptions};
  }

  setAdminToken(token: string) {
    try {
      localStorage.setItem('admin-token', token);
    } catch (e) {
    }
  }

  getAdminToken() {
    try {
      return localStorage.getItem('admin-token');
    } catch (e) {
      return null;
    }
  }

  clearAdminToken() {
    localStorage.removeItem('admin-token');
  }
}