import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama4Component } from './rama4.component';

describe('Rama4Component', () => {
  let component: Rama4Component;
  let fixture: ComponentFixture<Rama4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
