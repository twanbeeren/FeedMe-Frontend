import { TestBed, async, inject } from '@angular/core/testing';

import { TableGuard } from './table.guard';

describe('TableGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableGuard]
    });
  });

  it('should ...', inject([TableGuard], (guard: TableGuard) => {
    expect(guard).toBeTruthy();
  }));
});
