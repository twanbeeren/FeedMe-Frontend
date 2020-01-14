import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksMenuComponent } from './drinks-menu.component';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { OrderService } from 'src/app/core/services/order.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { MatDialog, MatSnackBar } from '@angular/material';

describe('DrinksMenuComponent', () => {
  let component: DrinksMenuComponent;
  let fixture: ComponentFixture<DrinksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksMenuComponent ],
      providers: [ TranslatorService, OrderService, MenuService, MatDialog, MatSnackBar]
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
