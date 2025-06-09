import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage-service';
import { mock_jokeMap } from '../pages/mocks/mock-data';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('save to storage', () => {
    const localStorageSetItemSpy = spyOn(window.localStorage, 'setItem');

    service.saveFavouritesToStorage(mock_jokeMap);

    expect(localStorageSetItemSpy).toHaveBeenCalledWith('favourites', JSON.stringify(mock_jokeMap));
  });

  it('get from storage', () => {
    const localStorageGetItemSpy = spyOn(window.localStorage, 'getItem');

    service.getFavouritesFromStorage();

    expect(localStorageGetItemSpy).toHaveBeenCalled();
  });
});
