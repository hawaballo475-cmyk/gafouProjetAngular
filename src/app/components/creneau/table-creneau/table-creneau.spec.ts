import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreneau } from './table-creneau';

describe('TableCreneau', () => {
  let component: TableCreneau;
  let fixture: ComponentFixture<TableCreneau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCreneau],
    }).compileComponents();

    fixture = TestBed.createComponent(TableCreneau);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
