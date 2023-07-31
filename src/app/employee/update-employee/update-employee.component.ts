import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employee_update_form = new FormGroup({
    employee_name:new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
