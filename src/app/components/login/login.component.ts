import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  loginForm !:FormGroup;
  constructor (private router : Router, private fb: FormBuilder){
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }

  ngOnInit(): void {
  }

  // Method to handle form submission
  onSubmit() {
    if(this.loginForm.valid){
      console.log('Form value:', this.loginForm.value);
      this.router.navigate(['/budget']);
    }
    // Add logic to handle the login action, e.g., call an authentication service
  }

  get f(){
    return this.loginForm?.controls;
  }
}