import { Component, OnInit } from '@angular/core';
import {faHome, faUser, faFilePdf, faAddressBook, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-two',
  templateUrl: './sidebar-two.component.html',
  styleUrls: ['./sidebar-two.component.css']
})
export class SidebarTwoComponent implements OnInit {
   faHome = faHome;
  faUser = faUser;
  faFilePdf = faFilePdf;
  faAddressBook = faAddressBook;
  faBars = faBars;
  faTimes = faTimes;
  mobHeader = false;
  expanded = false;
  status = true;
  hamberger  = true;
  constructor() { }

  ngOnInit() {
    if (window.screen.width < 769)  {
   this.mobHeader = true;
    }
    if(window.screen.width>1023){
      this.hamberger = false;
    }
  }
  clickItem() {
   this.status = !this.status;
   if (window.screen.width < 769) {
   this.mobHeader = !this.mobHeader;
  }
  // console.log (this.sidebar.nativeElement.style);
  }
}
