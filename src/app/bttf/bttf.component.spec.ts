import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BttfComponent } from './bttf.component';
import { BttfService } from './bttf.service';

describe('BttfComponent', () => {
  let component: BttfComponent;
  let fixture: ComponentFixture<BttfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BttfComponent ],
      imports: [ CommonModule, FormsModule ],
      providers: [ BttfService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BttfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
