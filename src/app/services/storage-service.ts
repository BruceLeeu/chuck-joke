import { Injectable } from '@angular/core';

export type JokeMap = Partial<Record<string, string>>;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getFavouritesFromStorage(): JokeMap {
    const favouritesAsString = localStorage.getItem('favourites');
    let parsed: unknown;
    try {
      parsed = JSON.parse(favouritesAsString ?? '{}');
    } catch (error) {
      console.error('Could not parse favourites from localStorage', error);
    }
    if (typeof parsed === 'object') {
      if (parsed !== null) {
        const obj: JokeMap = parsed;
        return obj;
      }
    }
    return {};
  }

  public saveFavouritesToStorage(jokeMap: JokeMap) {
    localStorage.setItem('favourites', JSON.stringify(jokeMap));
  }
}
