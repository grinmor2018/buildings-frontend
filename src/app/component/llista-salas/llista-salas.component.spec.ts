import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaSalasComponent } from './llista-salas.component';

describe('LlistaSalasComponent', () => {
  let component: LlistaSalasComponent;
  let fixture: ComponentFixture<LlistaSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaSalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
