import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  apiURL = 'http://localhost:8000/'
  constructor(private http : HttpClient) { }

  getMessage(){
    return this.http.get(this.apiURL);
  }
}
