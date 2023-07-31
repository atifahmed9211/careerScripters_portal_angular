import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-employee-confirmation',
  templateUrl: './delete-employee-confirmation.component.html',
  styleUrls: ['./delete-employee-confirmation.component.scss']
})
export class DeleteEmployeeConfirmationComponent implements OnInit {

  constructor(
    public bsModalRef:BsModalRef
  ) { }

  ngOnInit(): void {
  }
  closeModal()
  {
    this.bsModalRef.hide();
  }
}
