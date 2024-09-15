import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableData } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  apiURL = 'http://localhost:8000/'
  constructor(private http : HttpClient) { }

  getMessage(){
    return this.http.get(this.apiURL);
  }

  getTableData(){
    // data/tabledata
    return this.http.get<TableData[]>(this.apiURL+'data/tabledata');
  }
}
