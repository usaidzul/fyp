import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicePage } from './addservice.page';

describe('AddservicePage', () => {
  let component: AddservicePage;
  let fixture: ComponentFixture<AddservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
