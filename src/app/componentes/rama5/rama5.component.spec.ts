import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama5Component } from './rama5.component';

describe('Rama5Component', () => {
  let component: Rama5Component;
  let fixture: ComponentFixture<Rama5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
