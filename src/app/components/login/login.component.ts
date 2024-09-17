import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from '../../services/public.service';
import { AuthService } from '../../services/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  loginForm !:FormGroup;
  errorMessage: string | null = null;

  constructor (private router : Router, private fb: FormBuilder, private publicService: PublicService, private authService: AuthService){
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.router.navigate(['/budget']);
      this.userLoggedIn();
      this.publicService.login(email, password)
    }
  }

  extractUsername(): string {
    const localPart = this.loginForm.value.email.split('@')[0];
    const nameParts = localPart.replace(/\./g, ' ').split(' ');
    return nameParts[0] || localPart;
  }
  
  userLoggedIn() {
    let userID = this.extractUsername()
    console.log(userID)
    this.publicService.sendLoginStatus('login', userID);

  }

  get f(){
    return this.loginForm?.controls;
  }
}