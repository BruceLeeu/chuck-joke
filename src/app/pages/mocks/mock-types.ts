import { Observable } from 'rxjs';
import { RandomJokes } from '../random-jokes/random-jokes';
import { Joke } from '../../models/joke.model';

export type RandomJokesPlusPrivate = RandomJokes & {
  processJokes: () => void;
  removeOldestJoke: (jokeObservable: Observable<Joke>) => void;
};
