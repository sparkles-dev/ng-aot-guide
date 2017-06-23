import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BttfComponent } from './bttf.component';
import { BttfService } from './bttf.service';

export function myServiceFactory() {
  return new BttfService();
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BttfComponent
  ],
  exports: [
    BttfComponent
  ],
  providers: [
    { provide: BttfService, useFactory: myServiceFactory }
  ]
})
export class BttfModule { }
