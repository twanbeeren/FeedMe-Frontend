import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });
});
