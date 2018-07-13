import { Router } from '@angular/router';
import { AuthService } from './../../../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.isLoading = true;

    setTimeout(() => {
      this._auth.token = 'ok';
      this._router.navigateByUrl('/');
      this.isLoading = false;
    }, 1500)
  }

}
