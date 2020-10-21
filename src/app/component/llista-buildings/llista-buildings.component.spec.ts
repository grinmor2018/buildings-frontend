import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaBuildingsComponent } from './llista-buildings.component';

describe('LlistaBuildingsComponent', () => {
  let component: LlistaBuildingsComponent;
  let fixture: ComponentFixture<LlistaBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaBuildingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
