import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../enviroment/environment';

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  dob: string;
  profileImage?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private api = environment.apiBaseUrl;

  register(formData: FormData): Observable<RegisterRequest> {
    return this.http.post<RegisterRequest>(
      `${this.api}/user/register`,
      formData
    );
  }
  login(formData: FormData): Observable<LoginRequest> {
    return this.http.post<LoginRequest>(`${this.api}/auth/login`, formData);
  }

checkEmailExists(email: string): Observable<boolean> {
  return this.http
    .get<{ exists: boolean }>(`${this.api}/user/check-email?email=${email}`)
    .pipe(map(res => res.exists));
}


}
