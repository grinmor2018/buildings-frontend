import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdificisComponent } from './form-edificis.component';

describe('FormEdificisComponent', () => {
  let component: FormEdificisComponent;
  let fixture: ComponentFixture<FormEdificisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEdificisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEdificisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
