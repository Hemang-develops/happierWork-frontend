import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  labelData: [string, number, string][] = [];
  
  colorData: { [key: string]: string } = {
    "Engineering": "#7AC2B3",
    "Sales": "#F4C575",
    "Product": "#A4D1A5",
    "HR": "#b35600",
    "Other": "#C1DAD6"
  };

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableData'] || changes['usedAmount']) {
      this.tableData = this.tableData.filter(item => item.name !== 'engineering');
      const totalValue = this.tableData.reduce((sum, item) => sum + item.y, 0); // Get the total sum
      this.labelData = this.tableData.map(item => ([
        item.name,
        parseFloat(((item.y / totalValue) * 100).toFixed(2)),
        this.colorData[item.name] || '#FFFFFF'
      ]));
      this.renderChart();
    }
  }

  renderChart() {
    const chart = bb.generate({
      data: {
        columns: this.tableData.map(item => [item.name, item.y]),
        type: donut(),
        colors: this.colorData,
        labels: false
      },
      donut: {
        title: `${(this.usedAmount/100000000).toFixed(2)} Cr used`,
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
