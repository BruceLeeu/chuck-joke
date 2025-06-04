import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteJokes } from './favourite-jokes';

describe('FavouriteJokes', () => {
  let component: FavouriteJokes;
  let fixture: ComponentFixture<FavouriteJokes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteJokes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteJokes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
