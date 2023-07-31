import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddLeaveComponent } from '../add-leave/add-leave.component';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrls: ['./leaves-list.component.scss']
})
export class LeavesListComponent implements OnInit {

  applyLeaveModalRef: BsModalRef;
  role=this.homeService.loginUser;
  
  constructor(
    private modalService: BsModalService,
    private homeService:HomeServiceService
  ) { }

  ngOnInit(): void {
  }
  applyLeave() {
    this.applyLeaveModalRef = this.modalService.show(AddLeaveComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, },);
    this.applyLeaveModalRef.content.closeBtnName = 'Close';
  }
}
