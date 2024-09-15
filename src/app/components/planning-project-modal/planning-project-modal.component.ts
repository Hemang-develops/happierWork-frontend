import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning-project-modal',
  templateUrl: './planning-project-modal.component.html',
  styleUrl: './planning-project-modal.component.scss'
})
export class PlanningProjectModalComponent implements OnInit{
  planningProjectForm !: FormGroup;

  constructor(public dialogRef: MatDialogRef<PlanningProjectModalComponent>, private fb: FormBuilder, private router: Router){
    this.planningProjectForm = this.fb.group({
      projectName: ['',[Validators.required]],
      projectDescription: ['', Validators.required],
      coplanner: ['']
    })
  }


  ngOnInit(): void {
  }

  onModalClose(): void {
    this.dialogRef.close();
  }

  
  get f(){
    return this.planningProjectForm.controls;
  }

  onSubmit(){
    if(this.planningProjectForm.valid){
      console.log('Form value:', this.planningProjectForm.value);
    }
    this.onModalClose()
    this.router.navigate(['/budget']);
  }

}
