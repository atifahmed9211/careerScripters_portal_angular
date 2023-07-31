import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeConfirmationComponent } from './delete-employee-confirmation/delete-employee-confirmation.component';
import { AddBasicInfoComponent } from './add-basic-info/add-basic-info.component';
import { UpdateBasicInfoComponent } from './update-basic-info/update-basic-info.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeListComponent, AddEmployeeComponent, EmployeeDetailComponent, UpdateEmployeeComponent, DeleteEmployeeConfirmationComponent, AddBasicInfoComponent, UpdateBasicInfoComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
