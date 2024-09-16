import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-position-modal',
  templateUrl: './position-modal.component.html',
  styleUrl: './position-modal.component.scss'
})
export class PositionModalComponent {
  positionForm !: FormGroup;
  dropdownOptions = [
    ['engineering', 'Engineering'],
    ['hr', 'HR'],
    ['sales', 'Sales'],
    ['product', 'Product'],
    ['other', 'Other']
  ];

  constructor(
    public dialogRef: MatDialogRef<PositionModalComponent>,
    private fb: FormBuilder,
    private router: Router,
    private publicService: PublicService
  ) {
    this.positionForm = this.fb.group({
      designation: ['', [Validators.required]],
      department: ['', Validators.required],
      budget: ['', Validators.required],
      location: ['Ahmedabad', Validators.required]
    });
  }


  ngOnInit(): void {
  }

  onModalClose(): void {
    this.dialogRef.close();
  }

  
  get f(){
    return this.positionForm.controls;
  }

  onSubmit(){
    if(this.positionForm.valid){
      console.log('Form value:', this.positionForm.value);
        this.publicService.addTableData(this.positionForm.value).subscribe(() => {
        this.publicService.sendUpdate(this.positionForm.value);
        });
    }
    this.onModalClose()
    this.router.navigate(['/dashboard']);
  }

}
