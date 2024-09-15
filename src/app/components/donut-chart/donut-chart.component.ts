import { Component, AfterViewInit, Input, OnChanges } from '@angular/core';
import bb, { donut } from 'billboard.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements AfterViewInit, OnChanges {

  @Input() tableData: any[] = [];
  @Input() usedAmount: number = 1.5; // in Cr
  @Input() totalBudget!: number; // in Cr
  @Input() remainingAmount!: number; // in Cr
  @Input() positions: number = 12;

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
    this.renderChart(); // Re-render when inputs change
  }

  renderChart() {
    const chart = bb.generate({
      data: {
        columns: this.tableData.map(item => [item.name, item.y]),
        type: donut(),
        colors: this.tableData.reduce((acc, item) => ({ ...acc, [item.name]: item.color }), {}),
        labels: false // Disable labels on the chart
      },
      donut: {
        width: 35,
        label: {
          show: false // Hide default donut label
        }
      },
      bindto: "#donutChart"
    });

    // Add custom middle text
    document.querySelector('#donutChart .bb-chart-arcs-title')!.innerHTML = `
      <div style="font-size: 24px; font-weight: bold;">${this.usedAmount} Cr</div>
      <div style="font-size: 14px; color: #555;">Used</div>
      <div style="font-size: 12px; color: #888;">${this.positions} Positions</div>
    `;
  }
}
