import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  showLoader = false;
  files: any[] = [];

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsModalRef.hide();
  }
  onFileChange(event: any) {
    this.showLoader = true;
    for (let i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);
      // this.sendFilesToAPI(event.target.files[i])
    }
  }
  removeFile(index:any)
  {
    this.files.splice(index,1)
  }
}
