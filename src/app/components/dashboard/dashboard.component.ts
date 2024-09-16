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
    name: 'Asia Expansion',
    collaboratorEmail: 'Yash Menta',
    totalBudget: 1.5,
    totalPositions: 66,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    id: 2,
    name: 'Austrailia Expansion',
    collaboratorEmail: 'Yash Menta',
    totalBudget: 1.5,
    totalPositions: 66,
    remainingBudget: 200,
    utilizedBudget: 800
  },{
    id: 3,
    name: 'Growth 2024',
    collaboratorEmail: 'Yash Menta',
    totalBudget: 1.5,
    totalPositions: 66,
    remainingBudget: 200,
    utilizedBudget: 800
  }]

  openPlanningProjectModal(){
    this.planningProjectModal.open(PlanningProjectModalComponent, {
      width: '720px',
    });
  }
}
