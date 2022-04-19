import { TestBed } from '@angular/core/testing';

import { GamesWishListService } from './games-wish-list.service';

describe('WishListService', () => {
  let service: GamesWishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesWishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
