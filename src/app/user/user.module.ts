import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [DashboardComponent, UserComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
