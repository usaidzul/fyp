import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenginePage } from './addengine.page';

describe('AddenginePage', () => {
  let component: AddenginePage;
  let fixture: ComponentFixture<AddenginePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenginePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenginePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
