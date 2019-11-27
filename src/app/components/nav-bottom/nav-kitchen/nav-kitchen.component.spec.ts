import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavKitchenComponent } from './nav-kitchen.component';

describe('NavKitchenComponent', () => {
  let component: NavKitchenComponent;
  let fixture: ComponentFixture<NavKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
