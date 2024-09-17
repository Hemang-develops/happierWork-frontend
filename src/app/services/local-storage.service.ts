// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'userData';
// auth.service.ts
  login(userData: { id: string, name: string, token: string }) {
    // Use the user ID to store their data
    localStorage.setItem(`userData_${userData.id}`, JSON.stringify(userData));
  }

  logout(userId: string) {
    // Remove user data using their ID
    localStorage.removeItem(`userData_${userId}`);
  }

  getUserData(userId: string) {
    const userData = localStorage.getItem(`userData_${userId}`);
    return userData ? JSON.parse(userData) : null;
  }

}
