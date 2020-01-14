import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTableComponent } from './nav-table.component';
import { TranslateModule } from '@ngx-translate/core';

describe('NavTableComponent', () => {
  let component: NavTableComponent;
  let fixture: ComponentFixture<NavTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule ],
      declarations: [ NavTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
