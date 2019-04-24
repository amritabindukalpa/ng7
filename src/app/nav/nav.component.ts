import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-nav', // or as a class '.app-nav' or an attr '[app-nav]'
  templateUrl: './nav.component.html',
  // or use template : `<div></div>`
  styleUrls: ['./nav.component.scss']
  // or use styles : [`
  // div {
  //  color : red;
  // }
  // `]
})
export class NavComponent implements OnInit {

  appTitle : string = 'My App Yo';
  
  constructor() { }

  ngOnInit() {
  }

}
