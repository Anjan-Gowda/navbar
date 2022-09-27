import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  _loginForm: FormGroup;
  islogin: boolean;
  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private route: Router
  ) {
    this.islogin = this.as._isAuth;
  }

  ngOnInit() {
    this._loginForm = this.fb.group({
      username: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
    });
  }

  login() {
    if (
      this._loginForm.value.username == 'Admin' &&
      this._loginForm.value.pwd == 'anjan'
    ) {
      this.islogin = true;
      this.as._isAuth = true;
      this.route.navigateByUrl('/home');
    }
  }
}
