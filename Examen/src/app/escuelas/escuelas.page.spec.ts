import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelasPage } from './escuelas.page';

describe('EscuelasPage', () => {
  let component: EscuelasPage;
  let fixture: ComponentFixture<EscuelasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
