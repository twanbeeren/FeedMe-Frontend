import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFinishedComponent } from './payment-finished.component';

describe('PaymentFinishedComponent', () => {
  let component: PaymentFinishedComponent;
  let fixture: ComponentFixture<PaymentFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFinishedComponent ]
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
