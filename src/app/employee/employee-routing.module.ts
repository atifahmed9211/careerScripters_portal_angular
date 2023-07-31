import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBasicInfoComponent } from './add-basic-info/add-basic-info.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateBasicInfoComponent } from './update-basic-info/update-basic-info.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeListComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  },
  {
    path:"addBasicInfo",
    component:AddBasicInfoComponent
  },
  {
    path:"employeeDetail",
    component:EmployeeDetailComponent
  },
  {
    path:"updateEmployee",
    component:UpdateEmployeeComponent
  },
  {
    path:"updateBasicInfo",
    component:UpdateBasicInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
