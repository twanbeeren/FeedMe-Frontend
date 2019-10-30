import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishcardComponent } from './dishcard.component';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { SwipePageComponent } from '../swipe-page.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DishcardComponent', () => {
  let component: DishcardComponent;
  let fixture: ComponentFixture<DishcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishcardComponent, SwipePageComponent ],
      imports: [ CustomMaterialModule ],
      providers: [
        SwipePageComponent,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
