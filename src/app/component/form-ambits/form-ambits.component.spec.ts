import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAmbitsComponent } from './form-ambits.component';

describe('FormAmbitsComponent', () => {
  let component: FormAmbitsComponent;
  let fixture: ComponentFixture<FormAmbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAmbitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAmbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
