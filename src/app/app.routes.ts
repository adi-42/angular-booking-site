import { Routes } from '@angular/router';
import { CardGridComponent } from './card-grid/card-grid.component';
import { LandingComponent } from './landing/landing.component';
import { SearchbarComponent } from './landing/searchbar/searchbar.component';

export const routes: Routes = [
    {path: 'classes', component: LandingComponent},
    {path: 'search/:query', component: LandingComponent},
    {path: '', redirectTo: 'classes', pathMatch: 'full'}
];
