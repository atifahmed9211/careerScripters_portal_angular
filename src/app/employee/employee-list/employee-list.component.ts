import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteEmployeeConfirmationComponent } from '../delete-employee-confirmation/delete-employee-confirmation.component';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  deleteEmployeeModalRef: BsModalRef;
  role=this.homeService.loginUser;
  
  constructor(private modalService: BsModalService,
    private homeService: HomeServiceService) { }

  ngOnInit(): void {
  }
  deleteEmployee() {
    this.deleteEmployeeModalRef = this.modalService.show(DeleteEmployeeConfirmationComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.deleteEmployeeModalRef.content.closeBtnName = 'Close';
  }
}
