import { Component } from '@angular/core';
import { FavouritesService } from '../../services/favourites-service';
import { JokeItem } from '../../components/joke-item/joke-item';
import { Joke } from '../../models/joke.model';
import { JokeMap } from '../../services/storage-service';

@Component({
  selector: 'app-favourite-jokes',
  imports: [JokeItem],
  templateUrl: './favourite-jokes.html',
  styleUrl: './favourite-jokes.scss',
})
export class FavouriteJokes {
  constructor(public favouritesService: FavouritesService) {}

  /**
   * Converts a JokeMap object - containing jokes as values and their id's as keys - into an Array of its values
   * @param jokeMap JokeMap
   */
  public favouritesAsArray(jokeMap: JokeMap): Joke[] {
    const favouritesAsArray: Joke[] = [];
    Object.values(jokeMap).forEach((possibleFavourite) => {
      if (possibleFavourite) {
        favouritesAsArray.push(possibleFavourite);
      }
    });
    return favouritesAsArray;
  }
}
