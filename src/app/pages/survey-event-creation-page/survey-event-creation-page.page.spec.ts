import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEventCreationPagePage } from './survey-event-creation-page.page';

describe('SurveyEventCreationPagePage', () => {
  let component: SurveyEventCreationPagePage;
  let fixture: ComponentFixture<SurveyEventCreationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyEventCreationPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyEventCreationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
