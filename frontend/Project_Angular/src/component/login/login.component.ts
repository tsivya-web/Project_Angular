import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { error } from 'node:console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = "";
  password: string = "";
  showPassword: boolean = false;
  rememberMe: boolean = false;
  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  CheckUser() {
    if (!this.email || !this.password) {
      alert("אנא מלא את כל השדות");
      return;
    }

    this.isLoading = true;
    
    this.userService.getUser(this.email, this.password).subscribe({
      next: (data) => {
        console.log(data);
        this.userService.currentUser = data;
        this.userService.connected = true;
        localStorage.setItem('connected', 'true');
        
        if (this.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('userEmail', this.email);
        }
        
        this.isLoading = false;
        alert("התחברת בהצלחה!");
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        alert("שם משתמש או סיסמה שגויים");
        this.router.navigate(['register']);
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onEmailChange() {
    // Remove any validation styling or messages
  }

  onPasswordChange() {
    // Remove any validation styling or messages
  }

  validateForm(): boolean {
    return this.email.trim() !== '' && this.password.trim() !== '';
  }
}

    





