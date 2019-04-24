import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// Component meta data - it's a function with some info
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  //h1Style: boolean = false;
  constructor(private dataServ : DataService) { }

  ngOnInit() {
    // subscribe since ajax
    this.dataServ.getUsers().subscribe(result => {
      this.users = result;
      console.log(this.users);
    });
  }

  /*
  firstClick() {
    this.h1Style = true;
  }
  */
}
