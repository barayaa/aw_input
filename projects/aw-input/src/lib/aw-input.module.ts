import { NgModule } from '@angular/core';
import { AwInputComponent } from './aw-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    AwInputComponent,
    InputRefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AwInputComponent,
    InputRefDirective
  ]
})
export class AwInputModule { }
