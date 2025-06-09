import { Component, OnInit, signal } from '@angular/core';
import { JokeService } from '../../services/joke-service';
import { Joke } from '../../models/joke.model';
import { Observable } from 'rxjs/internal/Observable';
import { JokeItem } from '../../components/joke-item/joke-item';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-random-jokes',
  imports: [JokeItem, NgClass],
  templateUrl: './random-jokes.html',
  styleUrl: './random-jokes.scss',
})
export class RandomJokes implements OnInit {
  public jokes = signal<Joke[]>([]);
  public timerActive = signal(false);
  public jokeFetchErrorMessage = signal('');

  private timer?: number;

  constructor(private readonly jokeService: JokeService) {}

  public ngOnInit() {
    this.processJokes(this.jokeService.fetchJoke(10));
  }

  /**
   * Will either start - or stop - a 5 second timer that replaces the oldest joke in the list.
   */
  public toggleTimer() {
    this.timerActive.update((active) => {
      if (active) {
        clearInterval(this.timer);
        this.timer = undefined;
      } else {
        this.timer = setInterval(() => {
          this.removeOldestJoke();
          this.processJokes(this.jokeService.fetchJoke());
        }, 5000);
      }
      return !active;
    });
  }

  /**
   * Processes the observable retrieved from the JokeService.
   * Either adds the fetched joke to the array on `next()`, or displays an appropriate error message on `error()`.
   * @param jokeObservable The Observable that will be subscribed to.
   */
  private processJokes(jokeObservable: Observable<Joke>) {
    jokeObservable.subscribe({
      next: (newJoke) => {
        this.jokes.update((currentJokes) => [...currentJokes, newJoke]);
      },
      error: (err) => {
        console.warn(err);
        this.jokeFetchErrorMessage.set('Could not fetch any (more) jokes at this moment 😢');
        if (this.timerActive()) this.toggleTimer();
      },
    });
    return true;
  }

  /**
   * Removes the oldest joke in the array based on `created_at` timestamp
   */
  private removeOldestJoke() {
    this.jokes.update((jokes) => {
      let oldestJokeIndex = 0;
      jokes.forEach((joke, index) => {
        if (joke.created_at < jokes[oldestJokeIndex].created_at) {
          oldestJokeIndex = index;
        }
      });
      jokes.splice(oldestJokeIndex, 1);
      return jokes;
    });
  }
}
