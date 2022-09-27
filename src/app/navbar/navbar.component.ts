import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  _active = '';
  navComponent: Array<any> = [
    { path: '/home', name: 'Home', class: 'home' },
    { path: '/cars', name: 'Cars', class: 'cars' },
    { path: '/movies', name: 'Movies', class: 'movies' },
  ];
  constructor() {
    this._active = 'home';
  }

  ngOnInit() {}
  active(item) {
    this._active = item;
  }
}
