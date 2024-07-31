import { ReportStatus } from "./report-status.model";
import { ReportType } from "./report-type.model";
import { User } from "./user.model";


export interface Report{
    id: number;
    title: string;
    description: string;
    creationTime?: Date ;
    updateTime?: Date ;
    status: ReportStatus;
    type: ReportType;
    userId: number;
    user?: User;

}

export interface PaginatedReports {
    content: Report[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  }



