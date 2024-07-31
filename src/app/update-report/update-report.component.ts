import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report.service';
import { Report } from '../interface/report.model';
import { ReportStatus } from '../interface/report-status.model';
import { ReportType } from '../interface/report-type.model';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {
  report: Report = {
    id: 0,
    title: '',
    description: '',
    creationTime: new Date(),
    updateTime: new Date(),
    status: ReportStatus.CREATED,
    type: ReportType.USER_REPORT,
    userId: 1
  };

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const reportId = +this.route.snapshot.paramMap.get('id')!;
    if (reportId) {
      this.reportService.getReportById(reportId).subscribe(report => {
        this.report = report;
      });
    }
  }

  updateReport(): void {
    this.reportService.updateReport(this.report.id, this.report).subscribe(
      () => {
        console.log('Report updated successfully');
        this.router.navigate(['/report-list']); 
      },
      error => {
        console.error('Error updating report:', error);
      }
    );
  }

  onSubmit(): void {
    this.updateReport();
  }
}
