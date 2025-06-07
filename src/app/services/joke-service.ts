import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repeat } from 'rxjs';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  public fetchJokes(amount: number) {
    return this.http
      .get<Joke>('https://api.chucknorris.io/jokes/random')
      .pipe(repeat(amount));
  }
}
