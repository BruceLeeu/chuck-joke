/* eslint-disable @typescript-eslint/no-empty-function */
import { signal } from '@angular/core';
import { mock_jokeMap, mock_singleJoke } from './mock-data';
import { of } from 'rxjs/internal/observable/of';
import { StorageService } from '../../services/storage-service';

export const mock_storageService: StorageService = {
  getFavouritesFromStorage: () => {
    return {};
  },
  saveFavouritesToStorage: () => {},
};

export const mock_favouritesService = {
  favourites: signal(mock_jokeMap),
  isFavourite: () => false,
  cachedFavourites: signal(mock_jokeMap),
  addFavourite: () => {},
  removeFavourite: () => {},
  store: mock_storageService,
};

export const mock_jokeService = {
  fetchJoke: () => of(mock_singleJoke),
};
