import { Component, HostListener, OnInit } from '@angular/core';
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
  highlightedElementID: string | null = null;
  dropdownOptions = [
    ['Engineering', 'Engineering'],
    ['HR', 'HR'],
    ['Sales', 'Sales'],
    ['Product', 'Product'],
    ['Other', 'Other']
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

  
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const id = target.id;
    const activeElements = document.querySelectorAll('.activeElement');
    activeElements.forEach(element => element.classList.remove('activeElement'));

    if (id) {
      target.classList.add('activeElement');
      this.sendElementId(id);
    }
  }


  highlightElement(elementID: string | null) {
    
    document.querySelectorAll('.activeElement').forEach(el => el.classList.remove('activeElement'));
    if (elementID) {
      const element = document.getElementById(elementID);
      if (element) {
        element.classList.add('activeElement');
      }
    }
  }

  sendElementId(id: string) {
    this.publicService.sendUpdate(['tracking', id]);
  }

  onModalClose(): void {
    this.dialogRef.close();
  }

  
  get f(){
    return this.positionForm.controls;
  }

  onSubmit(){
    if(this.positionForm.valid){
      const formdata = Object.values(this.positionForm.value);
      this.publicService.sendUpdate(["add", ...formdata]);
    }
    this.onModalClose()
    this.router.navigate(['/dashboard']);
  }
}
