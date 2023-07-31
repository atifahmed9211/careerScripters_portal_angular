import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { DeleteOrderConfirmationComponent } from './delete-order-confirmation/delete-order-confirmation.component';
import { AssignOrderComponent } from './assign-order/assign-order.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent, AddOrderComponent, UpdateOrderComponent, DeleteOrderConfirmationComponent, AssignOrderComponent, SubmitOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
