import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import { SalaryComponent } from './salary/salary.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';

const routes: Routes = [
  {
    path:"",
    component:SalaryComponent
  },
  {
    path:"salaryDetail",
    component:SalaryDetailComponent
  },
  {
    path:"updateSalary",
    component:UpdateSalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryRoutingModule { }
