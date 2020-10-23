import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMantenimentComponent } from './form-manteniment.component';

describe('FormMantenimentComponent', () => {
  let component: FormMantenimentComponent;
  let fixture: ComponentFixture<FormMantenimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMantenimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMantenimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
