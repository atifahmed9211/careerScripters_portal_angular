import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrls: ['./salary-detail.component.scss']
})
export class SalaryDetailComponent implements OnInit {

  basic_salary = 42000;
  total_order_count = 35;
  completed_order_count = 34;
  tax = 600;
  gross_salary: number;
  net_salary: number;
  qa_bonus = 0;
  target_meeting_bonus = 0;
  exceeded_points = this.completed_order_count-this.total_order_count;
  exceeded_points_counter = 0;
  //checkbox start
  qa_bonus_checked = false;
  target_meeting_checked = false;
  other_funds_checked=false;
  leave_deduction_checked = false;
  late_coming_deduction = false;
  remaining_order_checked = false;
  other_deduction_checked=false;
  //checkbox end
  tax_deductions = 650;
  total_leave = 3;
  leave_deduction = 0;
  total_late_coming = 4;
  late_coming_deductions = 0;
  remaining_order_deductions = 0;
  total_remaining_count = this.total_order_count - this.completed_order_count;
  other_funds=0;
  other_deductions=0;

  constructor() { }

  ngOnInit(): void {

  }

  qaBonusChecked(event: any) {
    if (event.target.checked == true) {
      this.qa_bonus_checked = true;
      this.qa_bonus = 3000;
    }
    else {
      this.qa_bonus_checked = false;
      this.qa_bonus = 0;
    }
  }
  targetMeetingChecked(event: any) {
    if (event.target.checked == true) {
      this.target_meeting_checked = true;
      this.target_meeting_bonus = 3000;
    }
    else {
      this.target_meeting_checked = false;
      this.target_meeting_bonus=0;
    }
  }
  otherFundsChecked(event:any)
  {
    if(event.target.checked==true)
    {
      this.other_funds_checked=true;
    }
    else{
      this.other_funds_checked=false;
      this.other_funds=0;
    }
  }
  leaveDeductionChecked(event: any) {
    if (event.target.checked == true) {
      this.leave_deduction_checked = true;
      //leave_deduction = per day count * no.of leave
      let per_day_count = this.basic_salary / 30;
      this.leave_deduction = (per_day_count) * this.total_leave;
    }
    else {
      this.leave_deduction = 0;
      this.leave_deduction_checked = false;
    }
  }
  lateDeductionChecked(event: any) {
    if (event.target.checked == true) {
      this.late_coming_deduction = true;
      //late_coming_deduction = 4 late coming = 1 day salary
      let per_day_count = this.basic_salary / 30;
      if (this.total_late_coming % 4 == 0 || this.total_late_coming >= 4) {
        this.late_coming_deductions = Math.floor(this.total_late_coming / 4) * per_day_count;
      }
    }
    else {
      this.late_coming_deductions = 0;
      this.late_coming_deduction = false;
    }
  }
  remainingOrderDeduction(event: any) {
    if (event.target.checked == true) {
      this.remaining_order_checked = true;
      //remaing_order_deduction = per order count * remaining order count

      let per_order_count = Math.floor(this.basic_salary / 35);
      this.remaining_order_deductions = per_order_count * this.total_remaining_count;
    }
    else {
      this.remaining_order_checked = false;
      this.remaining_order_deductions = 0;
    }
  }
  otherDeductionChecked(event: any) {
    if (event.target.checked == true) {
      this.other_deduction_checked = true;
    }
    else {
      this.other_deduction_checked = false;
      this.other_deductions = 0;
    }
  }
  grossSalary() {
    this.gross_salary = this.basic_salary + this.qa_bonus + this.target_meeting_bonus + (this.exceeded_points * this.exceeded_points_counter) + this.other_funds;
    return this.gross_salary;
  }
  netSalary() {
    this.net_salary = this.gross_salary - this.tax - this.leave_deduction - this.late_coming_deductions - this.remaining_order_deductions-this.other_deductions;
    return this.net_salary;
  }
}
