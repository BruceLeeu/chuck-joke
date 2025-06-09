import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';

export type JokeMap = Partial<Record<string, Joke>>;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private FAVOURITES_KEY = 'favourites';

  /**
   * Retrieve a Map of favourited Jokes from localStorage.
   * Also performs necessary type checks and error handling for malformed objects.
   * @param joke The joke to favourite
   */
  public getFavouritesFromStorage(): JokeMap {
    const favouritesAsString = localStorage.getItem(this.FAVOURITES_KEY);
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
    localStorage.setItem(this.FAVOURITES_KEY, JSON.stringify(jokeMap));
  }
}
