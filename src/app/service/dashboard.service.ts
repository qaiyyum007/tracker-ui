import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment/environment';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  dob: string;
  profileImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);
    private api = environment.apiBaseUrl;
  
getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.api}/auth`);
}


getMyProfile(): Observable<User> {
  return this.http.get<User>(`${this.api}/auth/me`);
}

}
