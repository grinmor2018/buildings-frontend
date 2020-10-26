import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaAmbitsComponent } from './llista-ambits.component';

describe('LlistaAmbitsComponent', () => {
  let component: LlistaAmbitsComponent;
  let fixture: ComponentFixture<LlistaAmbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaAmbitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaAmbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
