import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRespostasComponent } from './form-respostas.component';

describe('FormRespostasComponent', () => {
  let component: FormRespostasComponent;
  let fixture: ComponentFixture<FormRespostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRespostasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
