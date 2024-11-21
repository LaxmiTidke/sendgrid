import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Register API call
  register(user: { name: string; email: string; mobile: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user); // Make POST request for registration
  }

  // Login API call
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials); // Make POST request for login
  }

  // Verify Email API call
  verifyEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/verify?email=${email}`); // Make GET request for email verification
  }
}
