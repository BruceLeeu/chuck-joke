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

  public favouritesAsArray(jokeMap: JokeMap): Joke[] {
    const favouritesAsArray: Joke[] = [];
    Object.values(jokeMap).forEach((possiblerFavourite) => {
      if (possiblerFavourite) {
        favouritesAsArray.push(possiblerFavourite);
      }
    });
    return favouritesAsArray;
  }
}
