import { Component, AfterViewInit, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import bb, { donut } from 'billboard.js';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements AfterViewInit, OnChanges, OnInit {

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

  data: { [key: string]: number } = {
    "Engineering": 30,
    "Sales": 10,
    "Product": 20,
    "HR": 25,
    "Other": 15
  }
  highlightedElementID!: string;
  highlightedElementValue!: string;

  constructor (private publicService: PublicService){}

  ngOnInit(): void {
    this.publicService.getRealTimeElementID().subscribe(
      (elementID: string | null) => {
        if (elementID && elementID.length > 1){
          console.log(elementID);
          
          this.highlightedElementID = elementID.split(" ")[0];
          this.highlightedElementValue = elementID.split(" ")[1];
          this.highlightElement();
        }
        this.highlightElement();
      },
      (error) => {
        console.error('Error fetching element ID:', error);
      }
    );  
  } 

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableData'] || changes['usedAmount'] || changes['totalBudget']) {
      this.tableData = this.tableData.filter(item => item.name !== 'engineering');
      const totalValue = this.tableData.reduce((sum, item) => sum + item.y, 0); // Get the total sum
      this.labelData = this.tableData.map(item => ([
        item.name,
        this.data[item.name],
        this.colorData[item.name] || '#FFFFFF'
      ]));
      // console.log(this.labelData);      
      this.renderChart();
    }
  }

  highlightElement(){
    document.querySelectorAll('.activeElement').forEach(el => el.classList.remove('activeElement'));
    // console.log(this.highlightedElementID ,"enterBudgetBtn");
    
    if (this.highlightedElementID) {
      if (this.highlightedElementID === "enterBudgetBtn"){
        this.totalBudget = parseInt(this.highlightedElementValue);
      }
      const element = document.getElementById(this.highlightedElementID);
      if (element) {
        element.classList.add('activeElement');
      }
    }
  }

  renderChart() {
    const chart = bb.generate({
      data: {
        columns: this.tableData.map(item => [item.name, this.data[item.name]]),
        type: donut(),
        colors: this.colorData,
        labels: false
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
