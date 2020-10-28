import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaEdificisComponent } from './llista-edificis.component';

describe('LlistaEdificisComponent', () => {
  let component: LlistaEdificisComponent;
  let fixture: ComponentFixture<LlistaEdificisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaEdificisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaEdificisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
