import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeItem } from './joke-item';
import { Joke } from '../../models/joke.model';

describe('JokeItem', () => {
  let component: JokeItem;
  let fixture: ComponentFixture<JokeItem>;
  const jokeData: Joke = {
    categories: ['movie'],
    created_at: '2020-01-05 13:42:29.855523',
    icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
    id: '0JqamoTkR_GK0DYbigQ5cw',
    updated_at: '2020-01-05 13:42:29.855523',
    url: 'https://api.chucknorris.io/jokes/0JqamoTkR_GK0DYbigQ5cw',
    value: "Arnold Schwarzenegger always says he'll be back. But Chuck Norris always handles things the first time",
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeItem],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('jokeData', jokeData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    const joke_item = fixture.nativeElement as HTMLElement;
    expect(joke_item.getElementsByClassName('joke__text')[0]?.textContent).toContain(
      "Arnold Schwarzenegger always says he'll be back. But Chuck Norris always handles things the first time",
    );
  });

  it('should render categories when they are specified', () => {
    fixture.componentRef.setInput('jokeData', { ...jokeData, categories: ['movie', 'food', 'history'] });

    fixture.detectChanges();

    const joke_item = fixture.nativeElement as HTMLElement;
    expect(joke_item.getElementsByClassName('category-pill').length).toBe(3);
  });

  it('should NOT render categories when none are specified', () => {
    fixture.componentRef.setInput('jokeData', { ...jokeData, categories: [] });

    fixture.detectChanges();

    const joke_item = fixture.nativeElement as HTMLElement;
    expect(joke_item.getElementsByClassName('category-pill').length).toBe(0);
  });

  // TODO Tests for favourited/not??
});
