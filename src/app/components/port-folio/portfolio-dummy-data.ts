
export type TenureType = 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Yearly';

export const PortfolioDummyData: Record<
  TenureType,
  { labels: string[]; series: { name: string; data: number[] }[] }
> = {
  Daily: {
    labels: ['2024-05-16', '2024-06-10', '2024-07-25', '2024-10-04', '2024-11-08', '2025-01-21', '2025-05-15'],
    series: [
      { name: 'Equity', data: [120, 200, 180, 220, 170, 190, 160] },
      { name: 'Debt', data: [100, 160, 140, 180, 130, 150, 140] },
      { name: 'Commodity', data: [60, 90, 70, 100, 80, 85, 70] }
    ]
  },
  Weekly: {
    labels: ['2025-06-01', '2025-06-08', '2025-06-15', '2025-06-22'],
    series: [
      { name: 'Equity', data: [800, 950, 700, 900] },
      { name: 'Debt', data: [500, 600, 550, 650] },
      { name: 'Commodity', data: [300, 400, 350, 450] }
    ]
  },
  Monthly: {
    labels: ['2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01'],
    series: [
      { name: 'Equity', data: [1000, 1200, 1100, 1400] },
      { name: 'Debt', data: [800, 850, 900, 950] },
      { name: 'Commodity', data: [600, 650, 700, 750] }
    ]
  },
  Quarterly: {
    labels: ['2024-03-31', '2024-06-30', '2024-09-30', '2024-12-31'],
    series: [
      { name: 'Equity', data: [2800, 3000, 2900, 3200] },
      { name: 'Debt', data: [2000, 2100, 2200, 2300] },
      { name: 'Commodity', data: [1500, 1600, 1700, 1800] }
    ]
  },
  Yearly: {
    labels: ['2020-12-31', '2021-12-31', '2022-12-31', '2023-12-31'],
    series: [
      { name: 'Equity', data: [8000, 8500, 8700, 9000] },
      { name: 'Debt', data: [6000, 6200, 6400, 6600] },
      { name: 'Commodity', data: [4000, 4300, 4600, 4800] }
    ]
  }
};
