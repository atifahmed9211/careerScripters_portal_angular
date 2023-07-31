import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path:"",
    component:InventoryComponent
  },
  {
    path:"inventory-detail",
    component:InventoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
