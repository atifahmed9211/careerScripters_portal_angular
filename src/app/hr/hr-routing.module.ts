import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr/hr.component';

const routes: Routes = [
  {
    path:'',
    component:HrComponent,
    children:[
      {
        path:"leaves",
        loadChildren:()=>import('../leaves/leaves.module').then(m=>m.LeavesModule)
      },
      {
        path:"attendance",
        loadChildren:()=>import('../attendance/attendance.module').then(m=>m.AttendanceModule)
      },
      {
        path:"inventory",
        loadChildren:()=>import('../inventory/inventory.module').then(m=>m.InventoryModule)
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
export class HrRoutingModule { }
