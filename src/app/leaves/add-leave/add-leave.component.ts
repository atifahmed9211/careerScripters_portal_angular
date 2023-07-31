import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.scss'],
})
export class AddLeaveComponent implements OnInit {

  selected_leave_type;
  //restrict user to select only future date.
  today = new Date();  //get current date
  current_time = new Date().toLocaleTimeString() //get current time
  leave_date_start;
  leave_date_end;
  leave_type_selected = false;
  no_of_days;
  available_casual_leave = 10;
  available_medical_leave = 10;

  @ViewChild('leaveEndDate') leaveEndDate: ElementRef<HTMLInputElement>
  @ViewChild('leaveStartDate') leaveStartDate: ElementRef<HTMLInputElement>

  leaveForm: FormGroup = new FormGroup({
    firstDate: new FormControl(''),
    secondDate: new FormControl(''),
    startTime:new FormControl(''),
    endTime:new FormControl('')
  })

  constructor(
    public bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsModalRef.hide();
  }
  getStartDay(event) {
    if (event.target.value != 0) {
      this.leave_type_selected = true;
      if (this.leaveStartDate) {
        this.leaveStartDate.nativeElement.value = null;
      }
      if (this.leaveEndDate) {
        this.leaveEndDate.nativeElement.value = null;
      }
      this.no_of_days = null;
      this.selected_leave_type = event.target.value;
      if (this.selected_leave_type == 'paid_leave' || this.selected_leave_type == 'casual_leave') {
        this.leave_date_start = new Date(this.today.getTime() + (48 * 60 * 60 * 1000)).toISOString().split('T')[0];
      }
      else {
        this.leave_date_start = this.today.toISOString().split('T')[0];  //get date in yyyy-mm-dd format and split time
      }
    }
    else {
      this.leave_type_selected = false;
    }
  }
  getEndDate(event) {
    this.leaveEndDate.nativeElement.value = null; //to remove previous value
    this.leave_date_start = event.target.value; //update Starting Date
    this.no_of_days = null; //update number of days
    let starting_date = Date.parse(event.target.value);
    console.log(Date.parse(this.leave_date_start));
    console.log(starting_date);
    if (this.selected_leave_type == 'paid_leave' || this.selected_leave_type == 'emergency_leave') {
      this.leave_date_end = new Date(starting_date + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    }
    else if (this.selected_leave_type == 'casual_leave') {
      this.leave_date_end = new Date(starting_date + ((this.available_casual_leave - 1) * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];;
    }
    else {
      this.leave_date_end = new Date(starting_date + ((this.available_medical_leave - 1) * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    }
  }
  getNumberOfDays() {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    //leaveFrom will return you a string like "2020-07-17" but not a comparable 
    //  date. You need to parse the date to compare it.
    let firstDate: any = Date.parse(this.leaveForm.value['firstDate']);
    let secondDate: any = Date.parse(this.leaveForm.value['secondDate']);
    this.no_of_days = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    this.no_of_days += 1;
    return this.no_of_days;
  }
}
