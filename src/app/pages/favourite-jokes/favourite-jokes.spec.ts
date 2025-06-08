import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteJokes } from './favourite-jokes';
import { mock_jokeArray, mock_jokeMap } from '../mocks/mock-data';

describe('FavouriteJokes', () => {
  let component: FavouriteJokes;
  let fixture: ComponentFixture<FavouriteJokes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteJokes],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteJokes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert JokeMap to Joke[] (Array)', () => {
    const convertedJokes = component.favouritesAsArray(mock_jokeMap);
    expect(convertedJokes).toEqual(mock_jokeArray);
  });
});
