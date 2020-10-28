import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaServeisComponent } from './llista-serveis.component';

describe('LlistaServeisComponent', () => {
  let component: LlistaServeisComponent;
  let fixture: ComponentFixture<LlistaServeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaServeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaServeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
