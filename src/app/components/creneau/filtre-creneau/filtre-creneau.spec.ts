import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreCreneau } from './filtre-creneau';

describe('FiltreCreneau', () => {
  let component: FiltreCreneau;
  let fixture: ComponentFixture<FiltreCreneau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreCreneau],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltreCreneau);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
