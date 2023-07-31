import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-order-confirmation',
  templateUrl: './delete-order-confirmation.component.html',
  styleUrls: ['./delete-order-confirmation.component.scss']
})
export class DeleteOrderConfirmationComponent implements OnInit {

  constructor(
    public bsModalRef:BsModalRef
  ) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.bsModalRef.hide();
  }
}
