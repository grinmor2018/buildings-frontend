import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaRespostasComponent } from './llista-respostas.component';

describe('LlistaRespostasComponent', () => {
  let component: LlistaRespostasComponent;
  let fixture: ComponentFixture<LlistaRespostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaRespostasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
