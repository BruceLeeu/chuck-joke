import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { JokeService } from './joke-service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { mock_singleJoke } from '../pages/mocks/mock-data';
import { of } from 'rxjs/internal/observable/of';
import { repeat } from 'rxjs';

describe('JokeService', () => {
  let service: JokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()],
    });
    service = TestBed.inject(JokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call fetchJoke one time', () => {
    const fetchJokeSpy = spyOn(service, 'fetchJoke').and.returnValue(of(mock_singleJoke));

    const result = service.fetchJoke();

    expect(fetchJokeSpy).toHaveBeenCalled();
    result.subscribe((result) => {
      expect(result).toEqual(mock_singleJoke);
    });
  });

  it('should call fetchJoke multiple times', fakeAsync(() => {
    const fetchJokeSpy = spyOn(service, 'fetchJoke').and.callFake((amount) => {
      // Mock `repeat()` of the original function
      return of(mock_singleJoke).pipe(repeat(amount));
    });

    const result = service.fetchJoke(4);
    expect(fetchJokeSpy).toHaveBeenCalledWith(4);

    const resultArray = [];
    result.subscribe((result) => {
      expect(result).toEqual(mock_singleJoke);
      resultArray.push(result);
    });
    tick(1);
    expect(resultArray.length).toBe(4);
  }));
});
