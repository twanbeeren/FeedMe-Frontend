import { FilterByTagsPipe } from './filter-by-tags.pipe';
import { MenuService } from '../services/menu.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { TestBed } from '@angular/core/testing';

describe('FilterByTagsPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MenuService]});
  });

  it('create an instance', () => {
    const pipe = new FilterByTagsPipe(TestBed.get(MenuService));
    expect(pipe).toBeTruthy();
  });
});
