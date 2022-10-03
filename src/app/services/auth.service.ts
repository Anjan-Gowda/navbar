import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class AuthService {
  _isAuth: boolean = false;
  constructor() {}
  isAuth() {
    this.setAuth(this._isAuth);
    return this._isAuth;
  }

  private _d: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  currentState = this._d.asObservable();

  setAuth(message :boolean){
 
    this._d.next(message);
  }
}
