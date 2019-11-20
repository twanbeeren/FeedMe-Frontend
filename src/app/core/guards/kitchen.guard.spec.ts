import { TestBed, async, inject } from '@angular/core/testing';

import { KitchenGuard } from './kitchen.guard';

describe('KitchenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitchenGuard]
    });
  });

  it('should ...', inject([KitchenGuard], (guard: KitchenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
