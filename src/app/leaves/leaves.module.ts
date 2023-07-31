import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeaveComponent } from './leave/leave.component';
import { LeavesListComponent } from './leaves-list/leaves-list.component';
import { AppliedLeavesComponent } from './applied-leaves/applied-leaves.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LeaveComponent, LeavesListComponent, AppliedLeavesComponent, AddLeaveComponent],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeavesModule { }
