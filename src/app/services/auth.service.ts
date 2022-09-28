import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  _isAuth: boolean = false;
  constructor() {}
  isAuth() {
    return this._isAuth;
  }
}
