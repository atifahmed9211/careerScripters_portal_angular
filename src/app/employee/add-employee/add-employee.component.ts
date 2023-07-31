import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee_registration_form = new FormGroup({
    employee_name: new FormControl(),
    email: new FormControl()
  })
  constructor(
    private homeService: HomeServiceService
  ) { }

  ngOnInit(): void {
  }
  sendMessage() {
    this.homeService.validateEmail(this.email?.value).subscribe((res) => {
      if (res.status == "valid") {
        let data = {
          receiver_email: this.email?.value,
          subject: "Account Created",
          message: "Hi " + this.employee_registration_form.value['employee_name'] + "! Your Account has been Created in WFM Portal"
        }
        this.homeService.sendMessage(data).subscribe((res) => {
          console.log();
        })
      }
      else{
        console.log("email is invalid");
      }
    })
  }
  get email() {
    return this.employee_registration_form.get('email')
  }
}
