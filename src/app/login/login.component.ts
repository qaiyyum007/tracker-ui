import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  private router = inject(Router);
  private auth = inject(AuthService);
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private async loginUser(formData: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.auth.login(formData));
      sessionStorage.setItem('auth', JSON.stringify(response));
      return response; 
    } catch (error) {
      console.error('Login failed:', error);
      throw error; 
    }
  }

  async onSubmit() {
    this.errorMessage.set(null);
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    try {
      const response = await this.loginUser(this.loginForm.value);
      this.handleLoginSuccess(response);
    } catch (error: any) {
      this.handleLoginError(error);
    } finally {
      this.isLoading.set(false);
    }
  }

  private handleLoginSuccess(response: any) {
    this.router.navigate(['/dashboard']);
  }

  private handleLoginError(error: any) {
    const message = error?.error?.message || error?.message || 'Login failed. Please try again.';
    this.errorMessage.set(message); // ✅ Fix signal update
  }

  goToRegister() {
    this.router.navigate(['/registration']);
  }
}
