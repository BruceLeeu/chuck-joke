import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RandomJokes } from './random-jokes';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { mock_jokeArray, mock_singleJoke } from '../mocks/mock-data';
import { RandomJokesPlusPrivate } from '../mocks/mock-types';
import { JokeService } from '../../services/joke-service';
import { of } from 'rxjs';

describe('RandomJokes', () => {
  let component: RandomJokes;
  let fixture: ComponentFixture<RandomJokes>;
  const mock_jokeService = {
    fetchJoke: () => of(mock_singleJoke),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomJokes],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient(),
        { provide: JokeService, useValue: mock_jokeService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomJokes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle timer', () => {
    // Initial state (false)
    expect(component?.['timerActive']()).toBeFalse();

    // Toggle true
    component.toggleTimer();
    expect(component?.['timerActive']()).toBeTrue();

    // Toggle back to initial state (false)
    component.toggleTimer();
    expect(component?.['timerActive']()).toBeFalse();
  });

  it('should remove the oldest joke after 5 seconds', fakeAsync(() => {
    const removeOldestJokeSpy = spyOn<RandomJokesPlusPrivate>(
      component as RandomJokesPlusPrivate,
      'removeOldestJoke',
    ).and.callThrough();
    const processJokes = spyOn<RandomJokesPlusPrivate>(
      component as RandomJokesPlusPrivate,
      'processJokes',
    ).and.callThrough();
    // Initial state (false)
    component.jokes.set(mock_jokeArray);

    // Toggle true
    component.toggleTimer();
    tick(5000);
    fixture.detectChanges();

    expect(processJokes).toHaveBeenCalled();
    expect(removeOldestJokeSpy).toHaveBeenCalled();
    expect(component.jokes().length).toBe(3);
    expect(component.jokes()).not.toEqual(mock_jokeArray);
  }));
});
