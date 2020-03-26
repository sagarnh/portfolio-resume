import { Component, OnInit } from '@angular/core';
import {faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
panelExpanded = true;
panelExpanded1 = false;
panelExpanded11 = false;
faChevronRight = faChevronRight;
faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit() {
  }

}
