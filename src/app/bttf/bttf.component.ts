import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BttfService } from './bttf.service';

@Component({
  selector: 'app-bttf',
  templateUrl: './bttf.component.html',
  styleUrls: ['./bttf.component.css']
})
export class BttfComponent implements OnInit {

  private message: string = `Back to the future, again!`;

  count: number = 123;
  items: string = `chickens`;

  answer: Observable<string>;

  constructor(
    private service: BttfService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.count += 1;
  }

  private onSubmit(value: string) {
    this.answer = this.service.ask(value);
  }

}
