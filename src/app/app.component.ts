import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronted';
  private router=inject(Router)




  ngOnInit() {
  window.addEventListener('storage', (event) => {
    if (event.storageArea === sessionStorage && event.key === 'token' && event.newValue === null) {
      this.router.navigate(['/login']);
    }
  });
}

}
