import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularMenuComponent } from './regular-menu.component';
import { CustomMaterialModule } from 'src/app/core/material.module';

describe('RegularMenuComponent', () => {
  let component: RegularMenuComponent;
  let fixture: ComponentFixture<RegularMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularMenuComponent ],
      imports: [ CustomMaterialModule ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
