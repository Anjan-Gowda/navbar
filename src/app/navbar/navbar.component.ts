import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  _active='';
  
  constructor() { 
    this._active='home'
  }

  ngOnInit() {
  }
  active(item){
    this._active=item;
  }

}