import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokes } from './random-jokes';

describe('RandomJokes', () => {
  let component: RandomJokes;
  let fixture: ComponentFixture<RandomJokes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomJokes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomJokes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
