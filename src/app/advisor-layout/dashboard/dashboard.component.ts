import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { FormsModule } from '@angular/forms';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, PieChart } from 'echarts/charts';
import { PolarComponent, GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { DASHBOARD_DATA } from '../../data/advisor-dashboard.data';

echarts.use([BarChart, PieChart, PolarComponent, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    SelectModule,
    TooltipModule,
    AvatarModule,
    ButtonModule,
    BadgeModule,
    FormsModule,
    NgxEchartsDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  data = DASHBOARD_DATA;

  selectedAccountType = 'HYSA';
  selectedCustomer = 'Customer...';
  selectedFilter = 'All';
  selectedStatus = 'Open';

  accountTypes = [
    { label: 'HYSA', value: 'HYSA' },
    { label: 'SBL', value: 'SBL' }
  ];

  radialChartOptions: any;
  topClientsChartOptions: any;
  cashFlowChartOptions: any;

  ngOnInit() {
    this.initCharts();
  }

  private initCharts() {
    // Accounts Opened Summary (Radial Polar Bar)
    this.radialChartOptions = {
      polar: {
        radius: [20, '80%']
      },
      angleAxis: {
        max: 10,
        startAngle: 90,
        show: false
      },
      radiusAxis: {
        type: 'category',
        data: ['5', '2', '1', '0', '9'],
        show: true,
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false }
      },
      tooltip: {},
      series: [
        {
          type: 'bar',
          data: [5, 6, 7, 8, 9],
          coordinateSystem: 'polar',
          name: 'Accounts',
          roundCap: true,
          itemStyle: {
            color: '#1359B9'
          }
        }
      ]
    };

    // Top 10 Client Balances (Vertical Bar)
    this.topClientsChartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: this.data.overview.topClientsChart.categories,
        axisLabel: {
          rotate: 30,
          interval: 0,
          fontSize: 10
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Balance',
          type: 'bar',
          barWidth: '40%',
          data: this.data.overview.topClientsChart.data,
          itemStyle: {
            color: '#1359B9'
          }
        }
      ]
    };

    // Cash Flow Summary (Large Bar)
    this.cashFlowChartOptions = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Inflows', 'Outflows'],
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: this.data.cashFlow.cashFlowChart.categories
      },
      yAxis: {
        type: 'value',
        max: 500000
      },
      series: [
        {
          name: 'Inflows',
          type: 'bar',
          data: this.data.cashFlow.cashFlowChart.inflows,
          itemStyle: { color: '#1359B9' }
        },
        {
          name: 'Outflows',
          type: 'bar',
          data: this.data.cashFlow.cashFlowChart.outflows,
          itemStyle: { color: '#A3AED0' }
        }
      ]
    };
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'complete': return 'pi pi-check-circle text-success';
      case 'error': return 'pi pi-times-circle status-icon-error';
      case 'pending': return 'pi pi-spinner-dotted pi-spin status-icon-pending';
      case 'not-started': return 'pi pi-spinner-dotted status-icon-default';
      default: return 'pi pi-spinner-dotted status-icon-default';
    }
  }
}
