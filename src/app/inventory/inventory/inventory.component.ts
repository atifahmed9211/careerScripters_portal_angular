import { Component, OnInit } from '@angular/core';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { AddProductComponent } from '../add-product/add-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  addProductModalRef:BsModalRef;
  updateProductModalRef:BsModalRef;

  constructor(
    private modalService:BsModalService,
  ) { }

  ngOnInit(): void {
  }
  addNewProduct() {
    this.addProductModalRef = this.modalService.show(AddProductComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.addProductModalRef.content.closeBtnName = 'Close';
  }
  updateProduct() {
    this.updateProductModalRef = this.modalService.show(UpdateProductComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.updateProductModalRef.content.closeBtnName = 'Close';
  }
}
