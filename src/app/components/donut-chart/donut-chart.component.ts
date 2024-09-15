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
        colors: {
          "Engineering": "#7AC2B3",  // Custom color for Engineering
          "Sales": "#F4C575",        // Custom color for Sales
          "Product": "#A4D1A5",      // Custom color for Product
          "HR": "#b35600",           // Custom color for HR
          "Other": "#C1DAD6"         // Custom color for Other
        },
        labels: false // Disable labels on the chart
      },
      donut: {
        title: `${this.usedAmount} Cr used`,
        width: 20,
        label: {
          show: false
        }
      },
      legend: {
        show: false
      },
      bindto: "#donutChart"
    });

    // Add custom middle text
    // document.querySelector('#donutChart .bb-chart-arcs-title')!.innerHTML = `
    //   <div style="font-size: 24px; font-weight: bold;">${this.usedAmount} Cr</div>
    //   <div style="font-size: 14px; color: #555;">Used</div>
    //   <div style="font-size: 12px; color: #888;">${this.positions} Positions</div>
    // `;
  }
}
