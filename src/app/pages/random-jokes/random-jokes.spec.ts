import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokes } from './random-jokes';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('RandomJokes', () => {
  let component: RandomJokes;
  let fixture: ComponentFixture<RandomJokes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomJokes],
      providers: [provideHttpClientTesting(), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomJokes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
