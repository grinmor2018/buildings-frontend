import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRoomsComponent } from './form-rooms.component';

describe('FormRoomsComponent', () => {
  let component: FormRoomsComponent;
  let fixture: ComponentFixture<FormRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
