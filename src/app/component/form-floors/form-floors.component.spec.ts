import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFloorsComponent } from './form-floors.component';

describe('FormFloorsComponent', () => {
  let component: FormFloorsComponent;
  let fixture: ComponentFixture<FormFloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFloorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
