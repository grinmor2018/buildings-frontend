import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPlantasComponent } from './llista-plantas.component';

describe('LlistaPlantasComponent', () => {
  let component: LlistaPlantasComponent;
  let fixture: ComponentFixture<LlistaPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
