import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlanningProjectModalComponent } from '../planning-project-modal/planning-project-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router, public planningProjectModal: MatDialog) {}

  projects = [{
    id: 1,
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    id: 2,
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    id: 3,
    name: 'Project 1',
    collaboratorEmail: 'demo@mail.com',
    totalBudget: 1000,
    remainingBudget: 200,
    utilizedBudget: 800
  }]

  openPlanningProjectModal(){
    this.planningProjectModal.open(PlanningProjectModalComponent, {
      width: '720px',
    });
  }
}
