import { Component,inject ,input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  isvisible:boolean=true;

  // Automatically captures ?returnUrl= from route via withComponentInputBinding()
  returnUrl = input<string>();

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    // Simulate API Auth Request
    localStorage.setItem('token', 'mock-jwt-token');

    // Redirect to original target URL or default fallback dashboard
    const destination = '/dashboard';
    this.router.navigateByUrl(destination);
    this.isvisible=false;
  }
}

