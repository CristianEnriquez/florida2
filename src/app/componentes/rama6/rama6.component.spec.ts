import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama6Component } from './rama6.component';

describe('Rama6Component', () => {
  let component: Rama6Component;
  let fixture: ComponentFixture<Rama6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
