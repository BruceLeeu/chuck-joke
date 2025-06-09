import { TestBed } from '@angular/core/testing';
import { FavouritesService } from './favourites-service';
import { StorageService } from './storage-service';
import { mock_singleJoke, mock_singleJokeAsJokeMapValue } from '../pages/mocks/mock-data';
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

  it('should remove favourite from cache', () => {
    const removeFavouriteSpy = spyOn(service, 'removeFavourite').and.callThrough();
    service['cachedFavourites'] = signal(mock_singleJokeAsJokeMapValue);
    expect(service.favourites()[mock_singleJoke.id]).toEqual(mock_singleJoke);

    service.removeFavourite(mock_singleJoke.id);

    expect(removeFavouriteSpy).toHaveBeenCalledWith(mock_singleJoke.id);
    expect(service.favourites()[mock_singleJoke.id]).toBeUndefined();
  });

  it("should return a joke's favourited state", () => {
    const isFavouriteSpy = spyOn(service, 'isFavourite').and.callThrough();

    const isNotFavourite = service.isFavourite(mock_singleJoke.id);

    expect(isFavouriteSpy).toHaveBeenCalledWith(mock_singleJoke.id);
    expect(isNotFavourite).toBeFalsy();

    service.addFavourite(mock_singleJoke);
    const isFavourite = service.isFavourite(mock_singleJoke.id);

    expect(isFavouriteSpy).toHaveBeenCalledWith(mock_singleJoke.id);
    expect(isFavourite).toBeTruthy();
  });
});
