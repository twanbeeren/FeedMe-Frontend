import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishcardComponent } from './dishcard.component';

describe('DishcardComponent', () => {
  let component: DishcardComponent;
  let fixture: ComponentFixture<DishcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishcardComponent ]
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
