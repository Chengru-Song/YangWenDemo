import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPage } from './computer.page';

describe('ComputerPage', () => {
  let component: ComputerPage;
  let fixture: ComponentFixture<ComputerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
