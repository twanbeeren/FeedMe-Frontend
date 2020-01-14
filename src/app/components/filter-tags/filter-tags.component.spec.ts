import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTagsComponent } from './filter-tags.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FilterTagsComponent', () => {
  let component: FilterTagsComponent;
  let fixture: ComponentFixture<FilterTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule ],
      declarations: [ FilterTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
