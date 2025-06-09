import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteJokes } from './favourite-jokes';
import { mock_jokeArray, mock_jokeMap } from '../mocks/mock-data';
import { FavouritesService } from '../../services/favourites-service';
import { mock_favouritesService } from '../mocks/mock-classes';

describe('FavouriteJokes', () => {
  let component: FavouriteJokes;
  let fixture: ComponentFixture<FavouriteJokes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteJokes],
      providers: [{ provide: FavouritesService, useValue: mock_favouritesService }],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteJokes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert JokeMap to Joke[] (Array)', () => {
    spyOn(component, 'favouritesAsArray').and.callThrough();
    const result = component.favouritesAsArray(mock_jokeMap);
    expect(result).toEqual(mock_jokeArray);
  });
});
