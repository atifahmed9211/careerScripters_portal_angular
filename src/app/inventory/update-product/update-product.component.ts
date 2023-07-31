import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(
    public bsModalRef:BsModalRef
  ) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsModalRef.hide();
  }
}
