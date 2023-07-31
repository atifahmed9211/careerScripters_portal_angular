import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import ('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'admin',
    loadChildren:()=>import ('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',
    loadChildren:()=>import ('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'manager',
    loadChildren:()=>import('./manager/manager.module').then(m=>m.ManagerModule)
  },
  {
    path:'hr',
    loadChildren:()=>import('./hr/hr.module').then(m=>m.HrModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
