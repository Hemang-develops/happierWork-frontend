import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PublicService } from '../../services/public.service';

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
  tableData: any = [];
  paginatedData: any = [];
  dataSource = new MatTableDataSource<any>(this.tableData);

  displayedColumns: string[] = ['designation', 'department', 'budget', 'location', 'lastUpdated', 'actions'];
  pageSize = 10;
  currentPage = 1;

  constructor(private fb: FormBuilder, private service: PublicService) {
    // Initialize the form with 'designation' as the default selected option
    this.dropdown = this.fb.group({
      selectedOption: ['designation']
    });
  }

  ngOnInit(): void {
    this.service.getTableData().subscribe(result => {
      this.tableData = result;
      this.updateTableData();
      console.log(this.tableData, 'data');
    });
  }

  updateTableData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.tableData.slice(startIndex, endIndex);
    this.dataSource.data = this.paginatedData;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateTableData();
  }
}
