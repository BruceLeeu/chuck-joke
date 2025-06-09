import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RandomJokes } from './random-jokes';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { mock_jokeArray } from '../mocks/mock-data';
import { RandomJokesPlusPrivate } from '../mocks/mock-types';
import { JokeService } from '../../services/joke-service';
import { mock_jokeService } from '../mocks/mock-classes';

describe('RandomJokes', () => {
  let component: RandomJokes;
  let fixture: ComponentFixture<RandomJokes>;

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
    // Initial state = false
    expect(component?.['timerActive']()).toBeFalse();

    component.toggleTimer();
    expect(component?.['timerActive']()).toBeTrue();

    component.toggleTimer();
    expect(component?.['timerActive']()).toBeFalse();
  });

  it('should remove the oldest joke after 5 seconds', fakeAsync(() => {
    const removeOldestJokeSpy = spyOn<RandomJokesPlusPrivate>(
      component as RandomJokesPlusPrivate,
      'removeOldestJoke',
    ).and.callThrough();
    const processJokesSpy = spyOn<RandomJokesPlusPrivate>(
      component as RandomJokesPlusPrivate,
      'processJokes',
    ).and.callThrough();
    component.jokes.set([...mock_jokeArray]);

    // Toggle true (inital state = false)
    component.toggleTimer();
    tick(5000);
    fixture.detectChanges();

    expect(processJokesSpy).toHaveBeenCalled();
    expect(removeOldestJokeSpy).toHaveBeenCalled();
    expect(component.jokes().length).toBe(3);
    expect(component.jokes()).not.toEqual(mock_jokeArray);
  }));
});
