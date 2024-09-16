import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from '../../services/public.service';
import { TableData } from '../../interface';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { WebSocketService } from '../../services/websocket.service';

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

  constructor(private fb: FormBuilder, private publicService: PublicService,private webSocketService: WebSocketService, private planningProjectModal: MatDialog) {
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
    });
    
    this.publicService.getRealTimeData().subscribe((realTimeData) => {
      this.tableData = realTimeData;
      this.updateTableData();
      this.aggregateBudgetData();
      this.updateBudget(this.chartData);
    });
  }
  
  // sendUpdateToWebSocket(): void {
  //   this.publicService.sendUpdate(this.tableData);
  // }

  updateTableData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.tableData.slice(startIndex, endIndex);
    this.dataSource.data = this.paginatedData;
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
    this.usedAmount = data.reduce((sum, item) => sum + item.y, 0) / 100;
    // this.totalBudget = this.totalBudget / 100;
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
    this.planningProjectModal.open(PositionModalComponent, {
      width: '720px',
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
