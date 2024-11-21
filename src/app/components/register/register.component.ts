import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    mobile: '',
    password: ''
  };

  message = ''; // To show success message

  constructor(private authService: AuthService) {}

  // onSubmit() {
  //   this.authService.register(this.user).subscribe({
  //     next: (response) => {
  //       this.message = 'Registration successful!';
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       this.message = 'Registration failed. Please try again.';
  //     }
  //   });
  // }
  onSubmit() {
    // Ensure that user object contains all the necessary fields
    this.authService.register(this.user).subscribe({
      next: (response) => {
        alert(response.message); // Show success message
      },
      error: (err) => {
        alert(err.error.message || 'Registration failed.');
        console.error(err); // Log the error to the console for debugging
      },
    });
  }
  
  
}
