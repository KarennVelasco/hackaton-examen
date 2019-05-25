import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexmateriaPage } from './indexmateria.page';

describe('IndexmateriaPage', () => {
  let component: IndexmateriaPage;
  let fixture: ComponentFixture<IndexmateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexmateriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexmateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
