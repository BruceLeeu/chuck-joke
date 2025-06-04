import { Routes } from '@angular/router';
import { RandomJokes } from './pages/random-jokes/random-jokes';
import { FavouriteJokes } from './pages/favourite-jokes/favourite-jokes';

export const routes: Routes = [
  { path: 'random', component: RandomJokes, title: 'Random jokes' },
  { path: 'favourite', component: FavouriteJokes, title: 'Favourite jokes' },
  { path: '**', redirectTo: 'random' },
];
