import { UsuarioApiService } from './usuario-api-service';
import { TestBed } from '@angular/core/testing';

describe('UsuarioApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create an instance', () => {
    const service: UsuarioApiService = TestBed.get(UsuarioApiService);
     expect(service).toBeTruthy();
  });
});
