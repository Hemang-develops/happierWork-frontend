// websocket.service.ts
import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

const WS_ENDPOINT = 'ws://localhost:8000/ws/dashboard/';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;

  constructor() {
    this.connect();
  }

  connect() {
    this.socket$ = new WebSocketSubject(WS_ENDPOINT);
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
    console.log(msg);
  }

  getMessages() {
    return this.socket$;
  }

  closeConnection() {
    this.socket$.complete();
  }
}
