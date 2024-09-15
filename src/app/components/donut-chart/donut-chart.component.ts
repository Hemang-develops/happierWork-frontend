import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: '1.5 Cr Used',
        verticalAlign: 'middle',
        floating: true,
        style: {
          fontSize: '24px',
          fontWeight: 'bold'
        },
        y: -10
      },
      subtitle: {
        text: '12 Positions',
        verticalAlign: 'middle',
        floating: true,
        y: 50,
        style: {
          fontSize: '16px',
          color: '#000',
          fontWeight: 'bold'
        }
      },
      plotOptions: {
        pie: {
          innerSize: '70%',
          depth: 45,
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [
        {
          type: 'pie',
          name: 'Budget share',
          data: [
            { name: 'Engineering', y: 30, color: '#7AC2B3' },
            { name: 'Product', y: 20, color: '#A4D1A5' },
            { name: 'Sales', y: 30, color: '#F4C575' },
            { name: 'Others', y: 10, color: '#C1DAD6' }
          ]
        }
      ],
      credits: {
        enabled: false
      }
    };
  
    // Total budget and used amount for display purposes
    totalBudget: number = 2; // in Cr
    usedAmount: number = 1.5; // in Cr
    remainingAmount: number = this.totalBudget - this.usedAmount; // in Cr
  }
  