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

  public toggleFavourite(id: string) {
    if (this.isFavourite(id)) {
      this.favouritesService.removeFavourite(id);
    } else {
      this.favouritesService.addFavourite(id);
    }
  }

  public isFavourite(id: string) {
    return this.favouritesService.isFavourite(id);
  }
}
