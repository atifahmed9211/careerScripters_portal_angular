import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })
  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  login()
  {
    if(this.loginForm.value['email']=="admin@gmail.com")
    {
      console.log("you are admin");
      localStorage.setItem("role","admin");
      this.route.navigate(['./admin']);
    }
    else if(this.loginForm.value['email']=="manager@gmail.com")
    {
      console.log("you are manager");
      localStorage.setItem("role","manager");
      this.route.navigate(['./manager']);
    }
    else if(this.loginForm.value['email']=="employee@gmail.com")
    {
      console.log("you are employee");
      localStorage.setItem("role","employee");
      this.route.navigate(['./user']);
    }
    else if(this.loginForm.value['email']=="hr@gmail.com")
    {
      console.log("you are hr");
      localStorage.setItem("role","hr");
      this.route.navigate(['./hr']);
    }
  }
}
