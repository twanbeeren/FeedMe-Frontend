import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenComponent } from './kitchen.component';
import { TranslateModule } from '@ngx-translate/core';
import { KitchenService } from 'src/app/core/services/kitchen.service';

describe('KitchenComponent', () => {
  let component: KitchenComponent;
  let fixture: ComponentFixture<KitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule ],
      declarations: [ KitchenComponent ],
      providers: [ KitchenService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
