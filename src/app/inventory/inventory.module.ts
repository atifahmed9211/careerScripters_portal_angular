import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';


@NgModule({
  declarations: [InventoryComponent, AddProductComponent, UpdateProductComponent, InventoryDetailComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule
  ]
})
export class InventoryModule { }
