import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'news/:id', component: NewsComponent }
];
