import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderModule)
      },
      {
        path:'leaves',
        loadChildren:()=>import('../leaves/leaves.module').then(m=>m.LeavesModule)
      },
      {
        path:"attendance",
        loadChildren:()=>import('../attendance/attendance.module').then(m=>m.AttendanceModule)
      },
      {
        path:"salary",
        loadChildren:()=>import('../salary/salary.module').then(m=>m.SalaryModule)
      },
      {
        path:"dailyExpense",
        loadChildren:()=>import('../daily-expense/daily-expense.module').then(m=>m.DailyExpenseModule)
      },
      {
        path:"employee",
        loadChildren:()=>import('../employee/employee.module').then(m=>m.EmployeeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
