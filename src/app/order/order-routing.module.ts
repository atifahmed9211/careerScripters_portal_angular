import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

const routes: Routes = [
  {
    path:"",
    component:OrderListComponent
  },
  {
    path:"order-detail",
    component:OrderDetailComponent
  },
  {
    path:"order-update",
    component:UpdateOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
