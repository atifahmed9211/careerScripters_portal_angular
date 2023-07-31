import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:"leaves",
        loadChildren:()=>import('../leaves/leaves.module').then(m=>m.LeavesModule)
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'order',
        loadChildren:()=>import('../order/order.module').then(m=>m.OrderModule)
      },
      {
        path:'attendance',
        loadChildren:()=>import('../attendance/attendance.module').then(m=>m.AttendanceModule)
      },
      {
        path:"salary",
        loadChildren:()=>import('../salary/salary.module').then(m=>m.SalaryModule)
      },
      {
        path:"profile",
        component:ProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
