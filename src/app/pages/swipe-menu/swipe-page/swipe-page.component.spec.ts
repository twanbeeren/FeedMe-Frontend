import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipePageComponent } from './swipe-page.component';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { DishcardComponent } from './dishcard/dishcard.component';

describe('SwipePageComponent', () => {
  let component: SwipePageComponent;
  let fixture: ComponentFixture<SwipePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishcardComponent, SwipePageComponent ],
      imports: [CustomMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
