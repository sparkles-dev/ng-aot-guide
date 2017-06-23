import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BttfComponent } from './bttf.component';
import { BttfService } from './bttf.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BttfComponent
  ],
  exports: [
    BttfComponent
  ],
  providers: [
    BttfService
  ]
})
export class BttfModule { }
