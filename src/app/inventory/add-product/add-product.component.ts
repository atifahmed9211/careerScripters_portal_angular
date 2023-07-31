import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  carton_Selected = false;
  selected_measurement="kg";
  noOfGrams:number=0;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsModalRef.hide();
  }
  changeUnit(event: any) {
    this.selected_measurement=event.target.value;
    if (this.selected_measurement == "carton") {
      this.carton_Selected = true;
    }
    else {
      this.carton_Selected = false;
    }
  }
}
