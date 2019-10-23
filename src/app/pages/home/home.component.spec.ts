import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SwipePageComponent } from '../swipe-menu/swipe-page/swipe-page.component';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { DishcardComponent } from '../swipe-menu/swipe-page/dishcard/dishcard.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SwipePageComponent, DishcardComponent ],
      imports: [ CustomMaterialModule ],
      providers: [HttpClient, HttpHandler]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
