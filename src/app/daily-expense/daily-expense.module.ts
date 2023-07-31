import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyExpenseRoutingModule } from './daily-expense-routing.module';
import { DailyExpenseComponent } from './daily-expense/daily-expense.component';


@NgModule({
  declarations: [DailyExpenseComponent],
  imports: [
    CommonModule,
    DailyExpenseRoutingModule
  ]
})
export class DailyExpenseModule { }
