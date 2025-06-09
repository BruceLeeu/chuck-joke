import { Injectable, signal, WritableSignal } from '@angular/core';
import { JokeMap, StorageService } from './storage-service';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  private cachedFavourites: WritableSignal<JokeMap>;

  constructor(private store: StorageService) {
    this.cachedFavourites = signal(this.store.getFavouritesFromStorage());
  }

  /**
   * Add a joke to the list of cachedFavourites.
   * Will also persist this updated list of cachedFavourites to localStorage.
   * @param joke The joke to add
   */
  public addFavourite(joke: Joke) {
    if (!this.cachedFavourites()[joke.id]) {
      this.cachedFavourites.update((favourites) => {
        favourites[joke.id] = joke;
        this.store.saveFavouritesToStorage(favourites);
        return favourites;
      });
    }
  }

  /**
   * Remove a joke from the list of cachedFavourites.
   * Will also persist this updated list of cachedFavourites to localStorage.
   * @param id The id (key) of the joke to remove
   */
  public removeFavourite(id: string) {
    if (this.cachedFavourites()[id]) {
      this.cachedFavourites.update((favourites) => {
        delete favourites[id];
        this.store.saveFavouritesToStorage(favourites);
        return favourites;
      });
    }
  }

  public isFavourite(id: string): boolean {
    return !!this.cachedFavourites()[id];
  }

  public get favourites() {
    return this.cachedFavourites;
  }
}
