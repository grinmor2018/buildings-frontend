import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactesComponent } from './form-contactes.component';

describe('FormContactesComponent', () => {
  let component: FormContactesComponent;
  let fixture: ComponentFixture<FormContactesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
