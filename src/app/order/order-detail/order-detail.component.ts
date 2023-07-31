import { Component, OnInit } from '@angular/core';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteOrderConfirmationComponent } from '../delete-order-confirmation/delete-order-confirmation.component';
import { AssignOrderComponent } from '../assign-order/assign-order.component';
import { SubmitOrderComponent } from '../submit-order/submit-order.component';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  deleteEmployeeModalRef: BsModalRef;
  assignOrderModalRef:BsModalRef;
  submitOrderModalRef:BsModalRef;
  role=this.homeService.loginUser;

  constructor(
    private modalService:BsModalService,
    private homeService:HomeServiceService
  ) { }

  ngOnInit(): void {
  }
  deleteOrder() {
    this.deleteEmployeeModalRef = this.modalService.show(DeleteOrderConfirmationComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.deleteEmployeeModalRef.content.closeBtnName = 'Close';
  }
  assignOrder()
  {
    this.assignOrderModalRef = this.modalService.show(AssignOrderComponent,{class:'modal-dialog-centered',backdrop:'static',keyboard:false});
    this.assignOrderModalRef.content.closeBtnName='close';
  }
  submitOrder()
  {
    this.submitOrderModalRef=this.modalService.show(SubmitOrderComponent,{class:'modal-dialog-centered',backdrop:'static',keyboard:false});
    this.submitOrderModalRef.content.closeBtnName='close';
  }
}
