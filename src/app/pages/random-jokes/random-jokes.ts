import { Component, OnInit, signal } from '@angular/core';
import { JokeService } from '../../services/joke-service';
import { Joke } from '../../models/joke.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-random-jokes',
  imports: [DatePipe],
  templateUrl: './random-jokes.html',
  styleUrl: './random-jokes.scss',
})
export class RandomJokes implements OnInit {
  public jokes = signal<Joke[]>([]);

  constructor(private readonly jokeService: JokeService) {
    console.log('fetching jokes');
  }

  public ngOnInit() {
    this.jokeService.fetchJokes(10).subscribe({
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
