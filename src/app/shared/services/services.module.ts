import { BaseService } from './base.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from './facade.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BaseService,
    FacadeService
  ]
})
export class ServicesModule { }
