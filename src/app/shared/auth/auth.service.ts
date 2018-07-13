import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public set token(token: string) {
    localStorage.setItem('token', token);
  }

  public get token() {
    return localStorage.getItem('token');
  }

  public tokenRemove() {
    localStorage.removeItem('token');
  }

}
