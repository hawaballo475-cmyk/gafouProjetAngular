import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreneau } from './formulaire-creneau';

describe('FormulaireCreneau', () => {
  let component: FormulaireCreneau;
  let fixture: ComponentFixture<FormulaireCreneau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireCreneau],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireCreneau);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
