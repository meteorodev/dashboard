import { TestBed } from '@angular/core/testing';

import { UsuCuaService } from './usu-cua.service';

describe('UsuCuaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuCuaService = TestBed.get(UsuCuaService);
    expect(service).toBeTruthy();
  });
});
