import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaContactesComponent } from './llista-contactes.component';

describe('LlistaContactesComponent', () => {
  let component: LlistaContactesComponent;
  let fixture: ComponentFixture<LlistaContactesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaContactesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaContactesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
