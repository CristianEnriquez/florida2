import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama2Component } from './rama2.component';

describe('Rama2Component', () => {
  let component: Rama2Component;
  let fixture: ComponentFixture<Rama2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
