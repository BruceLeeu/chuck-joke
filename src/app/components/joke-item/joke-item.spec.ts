import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeItem } from './joke-item';
import { mock_singleJoke } from '../../pages/mocks/mock-data';

describe('JokeItem', () => {
  let component: JokeItem;
  let fixture: ComponentFixture<JokeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeItem],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('jokeData', mock_singleJoke);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    const joke_item = fixture.nativeElement as HTMLElement;
    expect(joke_item.getElementsByClassName('joke__text')[0]?.textContent).toContain(mock_singleJoke.value);
  });

  it('should render categories when they are specified', () => {
    fixture.componentRef.setInput('jokeData', { ...mock_singleJoke, categories: ['movie', 'food', 'history'] });

    fixture.detectChanges();

    const joke_item = fixture.nativeElement as HTMLElement;
    expect(joke_item.getElementsByClassName('category-pill').length).toBe(3);
  });

  it('should NOT render categories when none are specified', () => {
    fixture.componentRef.setInput('jokeData', { ...mock_singleJoke, categories: [] });

    fixture.detectChanges();

    const joke_item = fixture.nativeElement as HTMLElement;
    expect(joke_item.getElementsByClassName('category-pill').length).toBe(0);
  });
});
