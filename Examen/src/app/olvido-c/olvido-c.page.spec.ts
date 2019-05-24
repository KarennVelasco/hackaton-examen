import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidoCPage } from './olvido-c.page';

describe('OlvidoCPage', () => {
  let component: OlvidoCPage;
  let fixture: ComponentFixture<OlvidoCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidoCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidoCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
