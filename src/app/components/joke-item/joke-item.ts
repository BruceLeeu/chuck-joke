import { Component, input } from '@angular/core';
import { Joke } from '../../models/joke.model';
import { DatePipe } from '@angular/common';
import { FavouritesService } from '../../services/favourites-service';

@Component({
  selector: 'app-joke-item',
  imports: [DatePipe],
  templateUrl: './joke-item.html',
  styleUrl: './joke-item.scss',
})
export class JokeItem {
  public jokeData = input.required<Joke>();

  constructor(private favouritesService: FavouritesService) {}

  public toggleFavourite(joke: Joke) {
    if (this.isFavourite(joke.id)) {
      this.favouritesService.removeFavourite(joke.id);
    } else {
      this.favouritesService.addFavourite(joke);
    }
  }

  public isFavourite(id: string) {
    return this.favouritesService.isFavourite(id);
  }
}
