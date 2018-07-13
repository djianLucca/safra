import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';

import { MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
