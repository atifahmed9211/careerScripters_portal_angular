import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedLeavesComponent } from './applied-leaves/applied-leaves.component';
import { LeaveComponent } from './leave/leave.component';
import { LeavesListComponent } from './leaves-list/leaves-list.component';

const routes: Routes = [
  {
    path:"",
    component:LeavesListComponent
  },
  {
    path:"leavesDetail",
    component:LeaveComponent
  },
  {
    path:"appliedLeaves",
    component:AppliedLeavesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
