import { TestBed } from '@angular/core/testing';
import { FavouritesService } from './favourites-service';
import { StorageService } from './storage-service';
import { mock_singleJoke } from '../pages/mocks/mock-data';
import { mock_storageService } from '../pages/mocks/mock-classes';
import { signal } from '@angular/core';

describe('FavouritesService', () => {
  let service: FavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: StorageService, useValue: mock_storageService }],
    });
    service = TestBed.inject(FavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add favourite to cache', () => {
    const addFavouriteSpy = spyOn(service, 'addFavourite').and.callThrough();
    service['cachedFavourites'] = signal({});
    expect(service.favourites()[mock_singleJoke.id]).toBeUndefined();

    service.addFavourite(mock_singleJoke);

    expect(addFavouriteSpy).toHaveBeenCalledWith(mock_singleJoke);
    expect(service.favourites()[mock_singleJoke.id]).toEqual(mock_singleJoke);
  });
});
