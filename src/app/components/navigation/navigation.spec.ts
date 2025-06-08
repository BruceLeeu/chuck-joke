import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation } from './navigation';
import { provideRouter } from '@angular/router';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation routes', () => {
    const navigation = fixture.nativeElement as HTMLElement;
    expect(navigation.querySelectorAll('a').length).toBe(2);
  });
});
