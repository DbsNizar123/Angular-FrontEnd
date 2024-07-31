import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReportService } from '../report.service';
import { Report } from '../interface/report.model';
import { ReportType } from '../interface/report-type.model';
import { ReportStatus } from '../interface/report-status.model';
import { User } from '../interface/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report-form',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent {
  report: Report = {
    title: '',
    description: '',
    type: ReportType.USER_REPORT,
    status: ReportStatus.CREATED,
    creationTime: new Date(),
    updateTime: new Date(),
    id: 0,
    userId: 1
  };

  constructor(private reportService: ReportService , private router:Router) { }

  ngOnInit(): void {

  }

  saveReport(): void {
    this.reportService.createReport(this.report)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );

      this.router.navigate(['/report-list']);
  }


 
  
}
