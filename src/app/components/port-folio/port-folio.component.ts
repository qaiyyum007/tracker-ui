import {
  Component,
  signal,
  ViewEncapsulation,
  inject,
  OnInit,
  computed
} from '@angular/core';
import { ChartModule } from '@progress/kendo-angular-charts';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { firstValueFrom, Observable } from 'rxjs';
import { PortfolioChartResponse, PortfolioService } from '../../service/portfolio.service';
import { TenureType } from './portfolio-dummy-data';


@Component({
  selector: 'app-port-folio',
  standalone: true,
  imports: [
    ChartModule,
    DialogModule,
    ButtonModule,
    DropDownsModule,
    PopupModule,
    CommonModule,
    NgApexchartsModule,
  ],
  templateUrl: './port-folio.component.html',
  styleUrl: './port-folio.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PortFolioComponent implements OnInit {
  private portfolioService = inject(PortfolioService);

  tenures: TenureType[] = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
  selectedTenure = signal<TenureType>('Daily');

  chartSeries = signal<ApexAxisChartSeries>([]);
  chartColors = ['#1e3a8a', '#f3b300', '#60a5fa'];

  chartDetails: ApexChart = {
    type: 'area',
    height: 450,
    width: 800,
    stacked: true,
    toolbar: { show: true },
    foreColor: '#333',
  };

  dataLabels: ApexDataLabels = { enabled: false };
  stroke: ApexStroke = { curve: 'smooth' };
  fill: ApexFill = {
    type: 'gradient',
    gradient: { opacityFrom: 0.6, opacityTo: 0.1 },
  };

  tooltip: ApexTooltip = {
    shared: true,
    intersect: false,
    style: {
      fontSize: '14px',
      fontFamily: 'inherit',
    },
    theme: 'dark',
    x: { format: 'dd MMM yy' },
    y: {
      formatter: (value) => `₹ ${value.toLocaleString()}`,
      title: { formatter: (name) => name },
    },
  };

  summaryValues = signal<{ equity: number; debt: number; commodity: number }>({
    equity: 0,
    debt: 0,
    commodity: 0,
  });

  legend: ApexLegend = {
    position: 'top',
    horizontalAlign: 'left',
  };

  xaxis: ApexXAxis = {
    type: 'datetime',
    title: { text: 'Date' },
    labels: { format: 'dd MMM yy' },
  };

  yaxis: ApexYAxis = {
    labels: {
      formatter: (value: number) => `₹ ${value.toLocaleString()}`,
    },
  };

  ngOnInit(): void {
    this.loadChartData(this.selectedTenure());
  }

  switchTenure(tenure: TenureType) {
    this.selectedTenure.set(tenure);
    this.loadChartData(tenure);
  }



async loadChartData(tenure: TenureType): Promise<void> {
  try {
    const data = await this.fetchDataByTenure(tenure);

    const transformedSeries = this.transformChartSeries(data.labels, data.series);
    const summary = this.updateSummaryValues(data.series);

    this.chartSeries.set(transformedSeries);
    this.summaryValues.set(summary);
  } catch (error) {
    console.error('Error loading chart data:', error);
  }
}




private async fetchDataByTenure(tenure: TenureType): Promise<PortfolioChartResponse> {
  return await firstValueFrom(this.portfolioService.getPortfolioData(tenure));
}


private transformChartSeries(
  labels: string[],
  series: { name: string; data: number[] }[]
): ApexAxisChartSeries {
  return series.map((s) => ({
    name: s.name,
    data: labels.map((date, index) => ({
      x: new Date(date).getTime(),
      y: s.data[index],
    })),
  }));
}

private updateSummaryValues(series: { name: string; data: number[] }[]): {
  equity: number;
  debt: number;
  commodity: number;
} {
  return {
    equity: series[0]?.data.at(-1) || 0,
    debt: series[1]?.data.at(-1) || 0,
    commodity: series[2]?.data.at(-1) || 0,
  };
}


}
