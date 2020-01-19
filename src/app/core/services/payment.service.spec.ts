import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { TicketService } from './ticket.service';
import { AuthService } from './auth.service';

describe('PaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ TicketService, AuthService ]
  }));

  it('should be created', () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });
});
