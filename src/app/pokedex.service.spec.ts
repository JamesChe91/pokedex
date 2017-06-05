import { TestBed, inject } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';

describe('PokedexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokedexService]
    });
  });

  it('should be created', inject([PokedexService], (service: PokedexService) => {
    expect(service).toBeTruthy();
  }));
});
