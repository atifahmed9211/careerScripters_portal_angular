import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-assign-order',
  templateUrl: './assign-order.component.html',
  styleUrls: ['./assign-order.component.scss']
})
export class AssignOrderComponent implements OnInit {

  order_count = environment.order_count;
  order_type = "completed";
  selected_writer: any;
  proofreader_selected = false;
  showLoader = false;
  files = [];
  deadline_in_date=null;
  today = new Date();  //get current date

  assign_order = new FormGroup({
    deadline_in_hours: new FormControl('')
  })
  constructor(
    public bsModalRef: BsModalRef,
    private homeService:HomeServiceService
  ) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsModalRef.hide();
  }
  changeOrderType(event: any) {
    if (event.target.value == 'completed') {
      this.order_type = 'completed';
    }
    else {
      this.order_type = 'divide'
    }
  }
  addWriter() {
    console.log(this.selected_writer);
  }
  chooseProofreader(event: any) {
    if (event.target.value == 'sendToProofreader') {
      this.proofreader_selected = true;
    }
    else {
      this.proofreader_selected = false;
    }
  }
  onFileChange(event: any) {
    this.showLoader = true;
    for (let i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
      // this.sendFilesToAPI(event.target.files[i])
    }
  }
  removeFile(index: any) {
    this.files.splice(index, 1)
  }
  updateDeadline(event) {
    let hours = event.target.value;
    let date = new Date(this.today.getTime() + (hours * 60 * 60 * 1000));
    let time = new Date(this.today.getTime() + (hours * 60 * 60 * 1000)).toLocaleTimeString();
    this.deadline_in_date = date.toDateString() +" "+ time;
    this.homeService.order_deadline=date;
  }
}
