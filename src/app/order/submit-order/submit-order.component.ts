import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.scss']
})
export class SubmitOrderComponent implements OnInit {

  constructor(
    public bsModalRef:BsModalRef
  ) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsModalRef.hide();
  }
}
