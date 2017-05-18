import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PoemComponent } from './poem/poem.component';
import { LocaleComponent } from './locale/locale.component';
import { MapComponent } from './map/map.component';
import { ProgressComponent } from './progress/progress.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poem', component: PoemComponent },
  { path: 'map', component: MapComponent },
  { path: 'locale/:id', component: LocaleComponent },
  { path: 'progress', component: ProgressComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
