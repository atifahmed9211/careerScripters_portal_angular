import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddOrderComponent } from '../add-order/add-order.component';
import { AssignOrderComponent } from '../assign-order/assign-order.component';
import { DeleteOrderConfirmationComponent } from '../delete-order-confirmation/delete-order-confirmation.component';
import { SubmitOrderComponent } from '../submit-order/submit-order.component';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  role = this.homeService.loginUser;
  addOrderModalRef: BsModalRef;
  deleteEmployeeModalRef: BsModalRef;
  assignOrderModalRef: BsModalRef;
  submitOrderModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private homeService: HomeServiceService
  ) { }

  ngOnInit(): void {
  }
  addNewOrder() {
    this.addOrderModalRef = this.modalService.show(AddOrderComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.addOrderModalRef.content.closeBtnName = 'Close';
  }
  deleteOrder() {
    this.deleteEmployeeModalRef = this.modalService.show(DeleteOrderConfirmationComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false });
    this.deleteEmployeeModalRef.content.closeBtnName = 'Close';
  }
  assignOrder() {
    this.assignOrderModalRef = this.modalService.show(AssignOrderComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false });
    this.assignOrderModalRef.content.closeBtnName = 'close';
  }
  submitOrder() {
    this.submitOrderModalRef = this.modalService.show(SubmitOrderComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false });
    this.submitOrderModalRef.content.closeBtnName = 'close';
  }
  countdownTimeStart() {

    var countDownDate = this.homeService.order_deadline;
    if (countDownDate) {
      // Update the count down every 1 second
      var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var difference = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (difference < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }
}
