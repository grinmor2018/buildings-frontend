import { TestBed } from '@angular/core/testing';

import { RespostasService } from './respostas.service';

describe('BuildingsService', () => {
  let service: RespostasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespostasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
