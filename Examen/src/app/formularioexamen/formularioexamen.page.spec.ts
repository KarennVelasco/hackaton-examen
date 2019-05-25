import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioexamenPage } from './formularioexamen.page';

describe('FormularioexamenPage', () => {
  let component: FormularioexamenPage;
  let fixture: ComponentFixture<FormularioexamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioexamenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioexamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
