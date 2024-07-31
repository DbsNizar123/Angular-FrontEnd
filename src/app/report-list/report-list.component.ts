import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { PaginatedReports, Report } from '../interface/report.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];
  totalElements = 0;
  totalPages = 0;
  currentPage = 0;
  pageSize = 3;

  constructor(private reportService: ReportService ,private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadReports(this.currentPage, this.pageSize);
  }

  loadReports(page: number, size: number): void {
    this.reportService.getAllReports(page, size).subscribe((data: PaginatedReports) => {
      this.reports = data.content;
      this.totalElements = data.totalElements;
      this.totalPages = data.totalPages;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadReports(this.currentPage, this.pageSize);
  }

  updateReport(id: number): void {
    this.router.navigate(['/admin-dashboard/update-report', id]);
  }

  deleteReport(id: number): void {
    this.reportService.deleteReport(id).subscribe(data => {
      console.log(data);
      this.loadReports(this.currentPage, this.pageSize);
    });
  }
}
