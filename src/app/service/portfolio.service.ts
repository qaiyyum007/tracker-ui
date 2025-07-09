

import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


export type PortfolioChartResponse = {
  labels: string[];
  series: { name: string; data: number[] }[];
};

export interface PortfolioApiRecord {
  id: string;
  tenure: string;
  equity: number;
  debt: number;
  commodity: number;
}


export type TenureType = 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Yearly';


@Injectable({ providedIn: 'root' })
export class PortfolioService {
  
  private readonly apiUrl = 'https://686e14aec9090c4953883124.mockapi.io/portfolio';

 private http = inject(HttpClient);
 
  getPortfolioData(tenure: TenureType): Observable<PortfolioChartResponse> {
    const params = new HttpParams().set('tenure', tenure.toLowerCase());
    return this.http.get<PortfolioApiRecord[]>(this.apiUrl, { params }).pipe(
      map(data => this.transformToChartData(data))
    );
  }

  private transformToChartData(data: PortfolioApiRecord[]): PortfolioChartResponse {
    const labels = data.map((_, i) => `Entry ${i + 1}`);

    const equityData = data.map(item => item.equity);
    const debtData = data.map(item => item.debt);
    const commodityData = data.map(item => item.commodity);

    return {
      labels,
      series: [
        { name: 'Equity', data: equityData },
        { name: 'Debt', data: debtData },
        { name: 'Commodity', data: commodityData }
      ]
    };
  }

  
}

