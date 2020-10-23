import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaMantenimentComponent } from './llista-manteniment.component';

describe('LlistaMantenimentComponent', () => {
  let component: LlistaMantenimentComponent;
  let fixture: ComponentFixture<LlistaMantenimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaMantenimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaMantenimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
