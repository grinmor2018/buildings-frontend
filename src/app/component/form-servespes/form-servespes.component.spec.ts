import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServespesComponent } from './form-servespes.component';

describe('FormServespesComponent', () => {
  let component: FormServespesComponent;
  let fixture: ComponentFixture<FormServespesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServespesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServespesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
