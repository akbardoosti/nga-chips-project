import { NgModule } from '@angular/core';
import { NgaChipsComponent } from './nga-chips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgaChipsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    NgaChipsComponent
  ]
})
export class NgaChipsModule { }
