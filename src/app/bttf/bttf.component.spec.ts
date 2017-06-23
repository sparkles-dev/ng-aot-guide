import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BttfComponent } from './bttf.component';

describe('BttfComponent', () => {
  let component: BttfComponent;
  let fixture: ComponentFixture<BttfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BttfComponent ]
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
