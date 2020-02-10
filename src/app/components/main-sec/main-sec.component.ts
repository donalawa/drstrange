import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sec',
  templateUrl: './main-sec.component.html',
  styleUrls: ['./main-sec.component.css']
})
export class MainSecComponent implements OnInit {
   //Use to toggle the navigation
   toggle:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
