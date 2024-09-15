import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() length: number = 200;  
  @Input() pageSize: number = 10; 
  @Input() totalPagesToShow: number = 10; 

  @Output() pageChange = new EventEmitter<number>();

  currentPage: number = 1; 

  getTotalPages(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  getRangeLabel(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.length);
    return `${start} - ${end} of ${this.length}`;
  }

  pagesArray(): (number | string)[] {
    const totalPages = this.getTotalPages();
    const current = this.currentPage;

    if (totalPages <= this.totalPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const half = Math.floor((this.totalPagesToShow - 1) / 2);

    if (current <= half + 1) {
      pages.push(...Array.from({ length: half + 2 }, (_, i) => i + 1));
      pages.push('...');
      pages.push(totalPages);
    } else if (current > totalPages - half - 1) {
      pages.push(1);
      pages.push('...');
      pages.push(...Array.from({ length: half + 2 }, (_, i) => totalPages - half + i - 1));
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(...Array.from({ length: half + 1 }, (_, i) => current - half + i));
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  }

  setPage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage && page > 0 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage); 
    }
  }

  previousPage() {
    if (this.hasPreviousPage()) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.setPage(this.currentPage + 1);
    }
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  hasNextPage(): boolean {
    return this.currentPage < this.getTotalPages();
  }
}