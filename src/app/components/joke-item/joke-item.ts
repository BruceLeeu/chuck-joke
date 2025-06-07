import { Component, input } from '@angular/core';
import { Joke } from '../../models/joke.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-joke-item',
  imports: [DatePipe],
  templateUrl: './joke-item.html',
  styleUrl: './joke-item.scss',
})
export class JokeItem {
  public jokeData = input.required<Joke>();
}
