import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rama3Component } from './rama3.component';

describe('Rama3Component', () => {
  let component: Rama3Component;
  let fixture: ComponentFixture<Rama3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rama3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rama3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
