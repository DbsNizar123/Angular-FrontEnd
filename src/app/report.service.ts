import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedReports, Report } from './interface/report.model';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = "http://localhost:8081/api/reports";

  constructor(private http : HttpClient) { }
 
  getAllReports(page: number, size: number): Observable<PaginatedReports> {
    return this.http.get<PaginatedReports>(`${this.baseURL}/page?page=${page}&size=${size}`);
  }
 

  getReportById(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.baseURL}/${id}`);
  }

  createReport(report: Report): Observable<Report> {
    return this.http.post<Report>(this.baseURL, report);
  }

  updateReport(id: number, report: Report): Observable<Report> {
    return this.http.put<Report>(`${this.baseURL}/${id}`, report);
  }

  deleteReport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }

}