import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = { email: '', password: '' };
  message = '';

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    const email = this.route.snapshot.queryParamMap.get('email');
    if (email) {
      this.authService.verifyEmail(email).subscribe({
        next: (response) => {
          this.message = response.message;
        },
        error: (err) => {
          this.message = err.error.message;
        },
      });
    }
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.message = response.message;
      },
      error: (err) => {
        this.message = err.error.message;
      },
    });
  }
}
