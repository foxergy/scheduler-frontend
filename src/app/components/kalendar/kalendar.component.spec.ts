import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarComponent } from './kalendar.component';

describe('KalendarComponent', () => {
  let component: KalendarComponent;
  let fixture: ComponentFixture<KalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalendarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
