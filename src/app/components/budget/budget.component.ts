import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})

export class BudgetComponent {
  dropdown !: FormGroup;
  dropdownOptions = [
    ['designation', 'Designation'],
    ['department', 'Department'],
    ['budget', 'Budget'],
    ['location', 'Location'],
    ['lastUpdated', 'Last Updated']
  ];

  constructor(private fb: FormBuilder) {
    this.dropdown = this.fb.group({
      selectedOption: ['designation']
    });
  }

  displayedColumns: string[] = ['designation', 'department', 'budget', 'location', 'lastUpdated', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  pieChartLabels: string[] = ['Engineering', 'Product R&D', 'Sales', 'HR & Recruitment'];
  pieChartData: number[] = [30, 20, 10, 40];
}

const ELEMENT_DATA = [
  { designation: 'HR Designer', department: 'HR', budget: '₹10L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  { designation: 'UI Designer', department: 'Product', budget: '₹10L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  { designation: 'Programmer Analyst', department: 'Engineering', budget: '₹10L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  { designation: 'Chief Work Officer Planning', department: 'Others', budget: '₹26L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  { designation: 'Vice President', department: 'Product', budget: '₹35L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  { designation: 'Chief Marketing Officer', department: 'Product', budget: '₹21L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  { designation: 'Program Manager', department: 'Product', budget: '₹35L', location: 'Ahmedabad', lastUpdated: ['name', 'Sep 6, 2022'] },
  // Add more data as needed
];
