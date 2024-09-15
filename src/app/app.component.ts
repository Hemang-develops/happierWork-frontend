import { Component, OnInit } from '@angular/core';
import { PublicService } from './services/public.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Happier Work';
  showBars = true;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide the sidebar and top bar for the root URL '/'
        this.showBars = event.urlAfterRedirects !== '/';
      }
    });
  }

  ngOnInit(): void {
  }
}
