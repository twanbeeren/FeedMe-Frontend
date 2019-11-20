import { TestBed } from '@angular/core/testing';

import { KitchenService } from './kitchen.service';

describe('KitchenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitchenService = TestBed.get(KitchenService);
    expect(service).toBeTruthy();
  });
});
