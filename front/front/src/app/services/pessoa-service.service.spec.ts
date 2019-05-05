import { TestBed } from '@angular/core/testing';

import { PessoaServiceService } from './pessoa-service.service';

describe('PessoaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaServiceService = TestBed.get(PessoaServiceService);
    expect(service).toBeTruthy();
  });
});
