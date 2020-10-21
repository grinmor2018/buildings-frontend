import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildingsComponent } from './form-buildings.component';

describe('FormBuildingsComponent', () => {
  let component: FormBuildingsComponent;
  let fixture: ComponentFixture<FormBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuildingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
