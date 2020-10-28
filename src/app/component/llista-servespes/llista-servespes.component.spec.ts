import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaServespesComponent } from './llista-servespes.component';

describe('LlistaServespesComponent', () => {
  let component: LlistaServespesComponent;
  let fixture: ComponentFixture<LlistaServespesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaServespesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaServespesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
