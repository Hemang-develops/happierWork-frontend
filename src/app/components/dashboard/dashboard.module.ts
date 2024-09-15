import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PlanningProjectModalComponent } from '../planning-project-modal/planning-project-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from '../project-list/project-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PlanningProjectModalComponent,
    ProjectListComponent
  ],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class DashboardModule { }
