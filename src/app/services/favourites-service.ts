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

  public addFavourite(joke: Joke) {
    if (!this.cachedFavourites()[joke.id]) {
      this.cachedFavourites.update((prev) => {
        prev[joke.id] = joke;
        this.store.saveFavouritesToStorage(prev);
        return prev;
      });
    }
  }

  public removeFavourite(id: string) {
    if (this.cachedFavourites()[id]) {
      this.cachedFavourites.update((prev) => {
        delete prev[id];
        this.store.saveFavouritesToStorage(prev);
        return prev;
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
