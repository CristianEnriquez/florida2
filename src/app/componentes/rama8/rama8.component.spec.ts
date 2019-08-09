import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama8Component } from './rama8.component';

describe('Rama8Component', () => {
  let component: Rama8Component;
  let fixture: ComponentFixture<Rama8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
