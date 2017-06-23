import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class BttfService {

  constructor() { }


  public ask(question: string): Observable<string> {

    const parts = question.split(' ');
    const idx = Math.floor(Math.random() * parts.length);

    return Observable.of(`They never ${parts[idx]}!`);
  }

}
