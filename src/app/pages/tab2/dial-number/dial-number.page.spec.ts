import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialNumberPage } from './dial-number.page';

describe('DialNumberPage', () => {
  let component: DialNumberPage;
  let fixture: ComponentFixture<DialNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialNumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
