import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PoemComponent } from './poem/poem.component';
import { LocaleComponent } from './locale/locale.component';
import { MapComponent } from './map/map.component';
import { ProgressComponent } from './progress/progress.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poem', component: PoemComponent },
  { path: 'map', component: MapComponent },
  { path: 'locale/:id', component: LocaleComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
