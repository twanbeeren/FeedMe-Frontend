import { TestBed } from '@angular/core/testing';

import { KitchenService } from './kitchen.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('KitchenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AngularFirestore ]
  }));

  it('should be created', () => {
    const service: KitchenService = TestBed.get(KitchenService);
    expect(service).toBeTruthy();
  });
});
