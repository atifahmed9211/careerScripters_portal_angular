import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteEmployeeConfirmationComponent } from '../delete-employee-confirmation/delete-employee-confirmation.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  deleteEmployeeModalRef: BsModalRef;
  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
  }
  deleteEmployee() {
    this.deleteEmployeeModalRef = this.modalService.show(DeleteEmployeeConfirmationComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.deleteEmployeeModalRef.content.closeBtnName = 'Close';
  }
}
