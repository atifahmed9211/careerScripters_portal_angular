import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openCloseSidebar() {
    document.getElementsByClassName("sidebar")[0].classList.toggle("open");
    document.getElementsByClassName("content")[0].classList.toggle("open");
  }
  active_deactive_navbar(ele) {
    //get all sidebar options
    let sidebar_option = document.getElementsByClassName("sidebar_nav");
    //remove active class from all previous element
    for (let i = 0; i < sidebar_option.length; i++) {
      sidebar_option[i].classList.remove("active");
    }
    //add active class on clicked element
    ele.target.classList.add("active");
  }
}
