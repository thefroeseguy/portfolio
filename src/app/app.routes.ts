import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {PageNotFound} from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  {path: '',component: Home},
  {path: '**', component: PageNotFound}
];
