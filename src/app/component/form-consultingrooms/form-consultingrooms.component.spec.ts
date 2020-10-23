import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultingroomsComponent } from './form-consultingrooms.component';

describe('FormConsultingroomsComponent', () => {
  let component: FormConsultingroomsComponent;
  let fixture: ComponentFixture<FormConsultingroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConsultingroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsultingroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
