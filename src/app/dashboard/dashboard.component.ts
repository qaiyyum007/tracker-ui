import { Component, computed, inject, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DashboardService } from '../service/dashboard.service';
import { CommonModule } from '@angular/common';
import { PortFolioComponent } from '../components/port-folio/port-folio.component';
import { CardComponent } from '../components/card/card.component';
import { HeaderComponent } from '../components/header/header.component';
interface ProfileResponse {
  message: string;
  user: User;
}


export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  dob: string;
  profileImage?: string ;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, PortFolioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private dashBoard = inject(DashboardService);

  user = signal<any | null>(null);
  showPopup = false;
  showPortfolio = false;

  openPortfolioModal() {
    this.showPortfolio = true;
  }

  closePortfolioModal() {
    this.showPortfolio = false;
  }



  togglePortfolio() {
    this.showPortfolio = !this.showPortfolio;
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



closeOnOverlayClick(event: MouseEvent) {
  if ((<HTMLElement>event.target).classList.contains('portfolio-modal-overlay')) {
    this.closePortfolioModal();
  }


}
}
