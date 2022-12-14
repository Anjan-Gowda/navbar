import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  _loginForm: any;
  islogin: boolean;
  username: string;
  pwd: string;
  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private route: Router,
    public dialog: MatDialog
  ) {
    // this.islogin = this.as._isAuth;
    this.as.currentState.subscribe((d) => {
      this.islogin = d;
    });
  }
  ngOnInit() {
    /*  this._loginForm = this.fb.group({
      username: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
    }); */
    console.log('here');
    this.openDialog('alert','');
  }

  login() {
    if (this._loginForm != undefined) {
      if (
        this._loginForm[0].ngmodel == 'Admin' &&
        this._loginForm[1].ngmodel == 'anjan'
      ) {
        this.islogin = true;
        this.as._isAuth = true;
        this.route.navigateByUrl('/cars');
      } else {
        this.openDialog('alert-danger',"Incorrect username/password",true);
      }
    }
  }

  openDialog(_class, title,req = false): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      disableClose: true,
      width: '250px',
      data: {
        _d: [
          { label: 'User name', placeholder: 'User name', ngmodel: '' },
          { label: 'Password', placeholder: 'Password', ngmodel: '' },
        ],
        alert: { class: _class, req: req,title:title },
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed', result);
      if(result!=undefined){

        this._loginForm = result._d;
        this.login();
      }
    });
  }
}
