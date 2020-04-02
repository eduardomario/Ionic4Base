import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingComponent } from './loading.component';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LoadingModule { }
