import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTicketComponent } from './kitchen-ticket.component';

describe('KitchenTicketComponent', () => {
  let component: KitchenTicketComponent;
  let fixture: ComponentFixture<KitchenTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
