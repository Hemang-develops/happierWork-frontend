// public.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableData } from '../interface';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  apiURL = 'http://localhost:8000/';
  private socket$: WebSocketSubject<any>;
  private dataSubject: BehaviorSubject<TableData[]> = new BehaviorSubject<TableData[]>([]);

  constructor(private http: HttpClient) {
    this.socket$ = new WebSocketSubject('ws://localhost:8000/ws/dashboard/');
    
    this.socket$.subscribe(
      (message) => {
        if (typeof message === 'string') {
          try {
            const parsedMessage = JSON.parse(message);
            if (Array.isArray(parsedMessage)) {
              this.dataSubject.next(parsedMessage as TableData[]);
            } else {
              console.error('Received non-array data:', parsedMessage);
            }
          } catch (e) {
            console.error('Error parsing WebSocket message:', e);
          }
        } else if (Array.isArray(message)) {
          this.dataSubject.next(message as TableData[]);
        } else {
          console.error('Unexpected WebSocket message format:', message);
        }
      },
      (error) => {
        console.error('WebSocket error:', error);
      }
    );
  }

  getTableData(): Observable<TableData[]> {
    return this.http.get<TableData[]>(this.apiURL + 'tabledata');
  }

  getRealTimeData(): Observable<TableData[]> {
    return this.dataSubject.asObservable();
  }

  sendUpdate(updatedData: any): void {
    this.socket$.next(JSON.stringify(updatedData));
  }

  deletePosition(positionId: string) {
    return this.http.delete(`${this.apiURL}delete/position/${positionId}`);
  }
}
