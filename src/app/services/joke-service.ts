import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repeat } from 'rxjs';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  /**
   * Will fetch a joke from the API in a synchronous fashion for `amount` of times.
   * @param amount The amount of Jokes to fetch from the API.
   * @default amount = 1
   */
  public fetchJoke(amount = 1) {
    return this.http
      .get<Joke>('https://api.chucknorris.io/jokes/random')
      .pipe(repeat(amount));
  }
}
