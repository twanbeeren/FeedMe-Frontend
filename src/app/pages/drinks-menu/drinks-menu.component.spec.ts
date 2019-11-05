import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksMenuComponent } from './drinks-menu.component';

describe('DrinksMenuComponent', () => {
  let component: DrinksMenuComponent;
  let fixture: ComponentFixture<DrinksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
