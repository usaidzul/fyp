import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowservicePage } from './showservice.page';

describe('ShowservicePage', () => {
  let component: ShowservicePage;
  let fixture: ComponentFixture<ShowservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
