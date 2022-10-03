import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  _active = '';
  isLoggedIn: boolean = false;
  navComponent: Array<any> = [
    { path: '/home', name: 'Home', class: 'home' },
    { path: '/cars', name: 'Cars', class: 'cars' },
    { path: '/movies', name: 'Movies', class: 'movies' },
  ];
  constructor(private as: AuthService, private route: Router) {
    this._active = 'home';
this.as.currentState.subscribe(d=>{
  this.isLoggedIn=d
})  }

  ngOnInit() {}
  active(item) {
    this._active = item;
  }
  signout() {
this.as._isAuth=false;
    this.route.navigateByUrl('/login')
  }
  signin() {
    
this.as._isAuth=true;
this.route.navigateByUrl('/login')
  }
}
