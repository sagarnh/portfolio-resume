import { Component, OnInit } from '@angular/core';
import {faHome, faUser, faFilePdf, faAddressBook, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faFilePdf = faFilePdf;
  faAddressBook = faAddressBook;
  faBars = faBars;
  faTimes = faTimes;
  mobHeader = false;
  expanded = false;
  status = true;
  constructor() { }

  ngOnInit() {
    if (window.screen.width < 769)  {
   this.mobHeader = true;
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
