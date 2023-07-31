import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary/salary.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [SalaryComponent, SalaryDetailComponent, UpdateSalaryComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    FormsModule
  ]
})
export class SalaryModule { }
