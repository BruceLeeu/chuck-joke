import { Component, OnInit, signal } from '@angular/core';
import { JokeService } from '../../services/joke-service';
import { Joke } from '../../models/joke.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-random-jokes',
  imports: [DatePipe],
  templateUrl: './random-jokes.html',
  styleUrl: './random-jokes.scss',
})
export class RandomJokes implements OnInit {
  public jokes = signal<Joke[]>([]);
  public timerActive = signal(false);

  private timer?: number;

  constructor(private readonly jokeService: JokeService) {}

  public ngOnInit() {
    this.processJokes(this.jokeService.fetchJokes(10));
  }

  public toggleTimer() {
    this.timerActive.update((active) => {
      if (active) {
        clearInterval(this.timer);
        this.timer = undefined;
      } else {
        this.timer = setInterval(() => {
          this.jokes.update((previous) => {
            previous.shift();
            return previous;
          });
          this.processJokes(this.jokeService.fetchJokes(1));
        }, 5000);
      }
      return !active;
    });
  }

  public processJokes(jokeObservable: Observable<Joke>) {
    jokeObservable.subscribe({
      next: (joke) => {
        this.jokes.update((previous) => [...previous, joke]);
      },
      error: (err) => {
        console.warn(err);
        // TODO: Error handling
      },
    });
  }
}
