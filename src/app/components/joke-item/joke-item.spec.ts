import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeItem } from './joke-item';

describe('JokeItem', () => {
  let component: JokeItem;
  let fixture: ComponentFixture<JokeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeItem],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('jokeData', {
      categories: ['movie'],
      created_at: '2020-01-05 13:42:29.855523',
      icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
      id: '0JqamoTkR_GK0DYbigQ5cw',
      updated_at: '2020-01-05 13:42:29.855523',
      url: 'https://api.chucknorris.io/jokes/0JqamoTkR_GK0DYbigQ5cw',
      value: "Arnold Schwarzenegger always says he'll be back. But Chuck Norris always handles things the first time",
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
