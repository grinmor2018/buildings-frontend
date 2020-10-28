import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServeisComponent } from './form-serveis.component';

describe('FormServeisComponent', () => {
  let component: FormServeisComponent;
  let fixture: ComponentFixture<FormServeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
