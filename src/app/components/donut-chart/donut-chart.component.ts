import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent {

  @Input() tableData: any[] = [];
  @Input() usedAmount: number = 16.08;
  @Input() totalBudget!: number;
  @Input() remainingAmount!: number;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: `${this.usedAmount} Cr Used`,
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

}
