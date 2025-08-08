import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, CommonModule, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(
    private userservice: UserService,
    private router: Router
  ) {}

  getConnected() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('connected') === 'true';
    } else {
      return false;
    }
  }

  logout() {
    // Clear user data
    this.userservice.connected = false;
    this.userservice.currentUser = null;
    
    // Clear localStorage
    localStorage.removeItem('connected');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('userEmail');
    
    // Navigate to login page
    this.router.navigate(['/login']);
    
    // Show logout message
    alert('התנתקת בהצלחה!');
  }

  getCurrentUserName(): string {
    if (this.userservice.currentUser) {
      return `${this.userservice.currentUser.fName} ${this.userservice.currentUser.lName}`;
    }
    return '';
  }

  isActiveRoute(route: string): boolean {
    return window.location.pathname === route;
  }
}
