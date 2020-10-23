import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicespecialitiesComponent } from './form-servicespecialities.component';

describe('FormServicespecialitiesComponent', () => {
  let component: FormServicespecialitiesComponent;
  let fixture: ComponentFixture<FormServicespecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServicespecialitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServicespecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
