import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDialogComponent } from './match-dialog.component';

describe('MatchDialogComponent', () => {
  let component: MatchDialogComponent;
  let fixture: ComponentFixture<MatchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
