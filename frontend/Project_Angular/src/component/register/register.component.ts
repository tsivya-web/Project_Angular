import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = {
    id: 0,
    fName: "",
    lName: "",
    email: "",
    password: ""
  };

  showPassword: boolean = false;
  agreeToTerms: boolean = false;
  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    if (!this.validateForm()) {
      alert("אנא מלא את כל השדות הנדרשים");
      return;
    }

    if (!this.agreeToTerms) {
      alert("אנא הסכם לתנאי השימוש");
      return;
    }

    this.isLoading = true;

    this.userService.add(this.user).subscribe({
      next: (data) => {
        alert("נרשמת בהצלחה!!");
        this.userService.currentUser = data;
        this.userService.connected = true;
        localStorage.setItem('connected', 'true');
        this.isLoading = false;
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        alert("שגיאה בהרשמה. אנא נסה שוב.");
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateForm(): boolean {
    return this.user.fName.trim() !== '' && 
           this.user.lName.trim() !== '' && 
           this.user.email.trim() !== '' && 
           this.user.password.trim() !== '';
  }

  getPasswordStrength(): string {
    const password = this.user.password;
    if (!password) return '';

    let score = 0;
    
    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    
    // Character variety checks
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    return 'strong';
  }

  getPasswordStrengthText(): string {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'weak': return 'סיסמה חלשה';
      case 'medium': return 'סיסמה בינונית';
      case 'strong': return 'סיסמה חזקה';
      default: return '';
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
