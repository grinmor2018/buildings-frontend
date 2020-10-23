import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWaitingroomsComponent } from './form-waitingrooms.component';

describe('FormWaitingroomsComponent', () => {
  let component: FormWaitingroomsComponent;
  let fixture: ComponentFixture<FormWaitingroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWaitingroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWaitingroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
