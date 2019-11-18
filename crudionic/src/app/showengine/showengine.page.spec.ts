import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowenginePage } from './showengine.page';

describe('ShowenginePage', () => {
  let component: ShowenginePage;
  let fixture: ComponentFixture<ShowenginePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowenginePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowenginePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
