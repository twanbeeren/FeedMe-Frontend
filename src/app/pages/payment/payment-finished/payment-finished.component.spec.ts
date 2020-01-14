import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFinishedComponent } from './payment-finished.component';
import { ActivatedRoute } from '@angular/router';

describe('PaymentFinishedComponent', () => {
  let component: PaymentFinishedComponent;
  let fixture: ComponentFixture<PaymentFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFinishedComponent ],
      providers: [ ActivatedRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
