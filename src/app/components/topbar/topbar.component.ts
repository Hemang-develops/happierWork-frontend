import { Component } from '@angular/core';
import { PublicService } from '../../services/public.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  loggedInUsers: { [key: string]: any } = {};
  loggedInUsersArray: string[] = [];
  loggedInUser !: string

  constructor(private publicService: PublicService, private router : Router){
    this.loggedInUser = this.publicService.loggedInUser
    this.publicService.getLoginData().subscribe(
      (loggedInUsers) => {
        this.loggedInUsers = loggedInUsers;
        this.updateLoggedInUsersDisplay();
      },
      (error) => {
        console.error('Error fetching login data:', error);
      }
    );
  }

  updateLoggedInUsersDisplay() {
    this.loggedInUsersArray = Object.keys(this.loggedInUsers);
    console.log(this.loggedInUsers);
  }

  userLoggedIn(userID: string) {
    this.publicService.sendLoginStatus('login', userID);
  }

  userLoggedOut(userID: string = this.loggedInUser) {
    this.publicService.sendLoginStatus('logout', userID);
    this.router.navigate([''])
  }
}
