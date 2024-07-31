import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportListComponent } from './report-list/report-list.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';




const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent, children: [
  {path: 'report-list', component: ReportListComponent },
  {path: 'update-report/:id', component:UpdateReportComponent},

  


]
},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'CreateReport', component: CreateReportComponent},
  {path: 'user-list', component:UserListComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
