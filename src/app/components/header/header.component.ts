import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DashboardService, User } from '../../service/dashboard.service';
interface ProfileResponse {
  message: string;
  user: User;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private dashBoard = inject(DashboardService);
  private router = inject(Router);
  user = signal<any>(null);
  menuOpen = signal(false);
  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

 
  ngOnInit() {
    this.getMyProfile();
  }
private async getMyProfile() {
  try {
   const response = await lastValueFrom(this.dashBoard.getMyProfile()) as unknown as ProfileResponse;
this.user.set(response.user); 
  } catch (error) {
    console.error('❌ getMyProfile failed:', error);
  }
}

encodeImageUrl(filename: string): string {
  return `http://localhost:3000/uploads/profile/${filename}`;
}

  initials = computed(() => {
    const u = this.user();
    const first = u?.firstName?.[0] ?? '';
    const last = u?.lastName?.[0] ?? '';
    return (first + last).toUpperCase();
  });

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
