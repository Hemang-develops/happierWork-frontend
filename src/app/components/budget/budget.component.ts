import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from '../../services/public.service';
import { TableData } from '../../interface';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { MatDialog } from '@angular/material/dialog';
import tableData from './data/tableData.js';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],  // Corrected from 'styleUrl' to 'styleUrls'
})

export class BudgetComponent implements OnInit {
  dropdown!: FormGroup;
  dropdownOptions = [
    ['designation', 'Designation'],
    ['department', 'Department'],
    ['budget', 'Budget'],
    ['location', 'Location'],
    ['lastUpdated', 'Last Updated']
  ];
  tableData: TableData[] = [];
  paginatedData: any = [];
  dataSource = new MatTableDataSource<any>(this.tableData);
  displayedColumns: string[] = ['designation', 'department', 'budget', 'location', 'lastUpdated', 'actions'];
  pageSize = 10;
  currentPage = 1;
  chartData: any[] = [];
  totalBudget: number = 20;
  usedAmount: number = 0;
  remainingAmount: number = 0;
  editBudget:boolean = false;
  highlightedElementID: string | null = null;
  highlightedElementValue!: string;

  constructor(private fb: FormBuilder, private publicService: PublicService, private planningProjectModal: MatDialog) {
    this.dropdown = this.fb.group({
      selectedOption: ['designation']
    });
  }

  ngOnInit(): void {
    this.publicService.getTableData().subscribe((result: TableData[]) => {
      this.tableData = result;
      this.updateTableData();
      this.aggregateBudgetData();
      this.updateBudget(this.chartData);
    }, (error) => {
      this.tableData = tableData;
      this.updateTableData();
      this.aggregateBudgetData();
      this.updateBudget(this.chartData);
    });
    
    this.publicService.getRealTimeData().subscribe((realTimeData) => {
      this.tableData = realTimeData;
      this.updateTableData();
      this.aggregateBudgetData();
      this.updateBudget(this.chartData);
    });

    this.publicService.getRealTimeElementID().subscribe(
      (elementID: string | null) => {
        if (elementID && elementID.length > 1){
          this.highlightedElementID = elementID[0];
          this.highlightedElementValue = elementID[1];
        }
        this.highlightElement(elementID);
      },
      (error) => {
        console.error('Error fetching element ID:', error);
      }
    );
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const id = target.id;
    const activeElements = document.querySelectorAll('.activeElement');
    activeElements.forEach(element => element.classList.remove('activeElement'));

    if (id) {
      target.classList.add('activeElement');
      this.sendElementId(id);
    }
  }

  highlightElement(elementID: string | null) {
    
    document.querySelectorAll('.activeElement').forEach(el => el.classList.remove('activeElement'));
    if (elementID) {
      if (elementID === "enterBudgetBtn"){
        this.totalBudget = parseInt(this.highlightedElementValue);
      }
      const element = document.getElementById(elementID);
      if (element) {
        element.classList.add('activeElement');
      }
      this.updateTableData();
    }
  }

  sendElementId(id: string) {
    let data = ['tracking', id]
    if (id === 'enterBudgetBtn'){
      data = [...data, `${this.totalBudget}`]
    }
    this.publicService.sendUpdate(data);
  }

  updateTableData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.tableData.slice(startIndex, endIndex);
    this.dataSource.data = [...this.paginatedData];
  }

  aggregateBudgetData(): void {
    const departmentBudgets: { [key: string]: number } = {};

    this.tableData.forEach(row => {
      const department = row.department;
      const budget = row.budget;

      if (departmentBudgets[department]) {
        departmentBudgets[department] += budget;
      } else {
        departmentBudgets[department] = budget;
      }
    });

    this.chartData = Object.keys(departmentBudgets).map(department => ({
      name: department,
      y: departmentBudgets[department]
    }));
  }
  
  updateBudget(data: any[]) {
    this.usedAmount = 18;
    this.remainingAmount = this.totalBudget - this.usedAmount;
}


  onPageChange(page: number) {
    this.currentPage = page;
    this.updateTableData();
  }

  toggleEditBudget(){
    this.editBudget = !this.editBudget;
    this.updateBudget(this.chartData);
  }

  openPlanningProjectModal(){
    const dialogRef = this.planningProjectModal.open(PositionModalComponent, {
      width: '720px',
    });

    dialogRef.componentInstance.updateTableEvent.subscribe(() => {
      this.updateTableData(); // Call your method to update table data
    });
  }
  
  deletePosition(id:string){
    this.tableData = this.tableData.filter(rows => rows.id !== id);    
    this.updateTableData();
    this.aggregateBudgetData();
    this.publicService.sendUpdate(["delete", id]);
    this.publicService.deleteTableData
  }
}
