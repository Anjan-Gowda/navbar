import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  _loginForm: FormGroup;
  islogin: boolean;

  @ViewChild('modal',{static:false}) modal:ModalComponent
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
    console.log("here")
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
  openModal(){
    this.modal.open();

  }
}
