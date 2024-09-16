// public.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableData } from '../interface';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  apiURL = 'http://localhost:8000/';
  private socket$: WebSocketSubject<any>;
  private dataSubject: BehaviorSubject<TableData[]> = new BehaviorSubject<TableData[]>([]);
  private elementIDSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private loginDataSubject = new BehaviorSubject<{ [key: string]: any }>({});
  loggedInUser!: string;

  constructor(private http: HttpClient) {
    this.socket$ = new WebSocketSubject('ws://localhost:8000/ws/dashboard/');

    this.socket$.subscribe(
      (message) => {
        if (typeof message === 'string') {
          try {
            const parsedMessage = JSON.parse(message);
            if (Array.isArray(parsedMessage)) {
              this.dataSubject.next(parsedMessage as TableData[]);
            } else if (parsedMessage && parsedMessage.elementID) {
              this.elementIDSubject.next(parsedMessage.elementID);
            } else {
              console.warn('Received non-array data:', parsedMessage);
            }
          } catch (e) {
            console.warn('Error parsing WebSocket message:', e);
          }
        } else if (Array.isArray(message)) {
          this.dataSubject.next(message as TableData[]);
        }
          else if(message && message['login_update']) {
            this.loginDataSubject.next(message['logged_in_users']);
        } else if (message && message['elementID']){
          this.elementIDSubject.next(message.elementID);
        }
         else {
          console.warn('Unexpected WebSocket message format:', message, );
        }
      },
      (error) => {
        console.error('WebSocket error:', error);
      }
    );
  }

  getLoginData() {
    return this.loginDataSubject.asObservable();
  }

  sendLoginStatus(action: string, userID: string) {
    this.loggedInUser = userID;
    this.socket$.next(JSON.stringify({ action, userID }));
  }

  login(email: string, password: string) {
    const loginData = {
      email: email,
      password: password
    };

    const emailParts = email.split('@')[0].split('.');
    const firstName = emailParts[0] || '';
    const lastName = emailParts[1] || '';
    const data = ["login", `${firstName} ${lastName}`]
    this.sendUpdate(data)
  }

  sendNameOverWebSocket(data: any): void {
    this.socket$.next(data);
  }

  getRealTimeData(): Observable<TableData[]> {
    return this.dataSubject.asObservable();
  }

  getRealTimeElementID(): Observable<string | null> {
    return this.elementIDSubject.asObservable();
  }

  sendUpdate(updatedData: any): void {
    console.log(updatedData)
    this.socket$.next(JSON.stringify(updatedData));
  }

  getTableData(): Observable<TableData[]> {
    return this.http.get<TableData[]>(`${this.apiURL}data`);
  }

  addTableData(newEntry: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}data/add/`, newEntry, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateTableData(entryId: string, updatedEntry: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}data/update/${entryId}/`, updatedEntry, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteTableData(entryId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}data/delete/${entryId}/`);
  }

}
