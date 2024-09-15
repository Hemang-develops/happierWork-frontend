import { Component, OnInit } from '@angular/core';
import { PublicService } from './services/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Happier Work';
  msg:any;

  constructor(private pService : PublicService){}

  ngOnInit(): void {
    this.showMsg();
  }

  showMsg(){
    this.pService.getMessage().subscribe(data =>{
      this.msg = data;
      console.log(this.msg);
      
    });
  }
}
