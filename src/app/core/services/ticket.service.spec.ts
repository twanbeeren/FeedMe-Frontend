import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

describe('TicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AngularFirestore, Router ]
  }));

  it('should be created', () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });
});
