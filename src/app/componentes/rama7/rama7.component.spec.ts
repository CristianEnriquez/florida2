import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama7Component } from './rama7.component';

describe('Rama7Component', () => {
  let component: Rama7Component;
  let fixture: ComponentFixture<Rama7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
