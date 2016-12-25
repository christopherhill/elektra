import { RootComponent } from './root.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { entityRoutes } from './../entity/entity.routes';

export const rootRoutes: Routes = [
  ...entityRoutes,
  { path: '', component: RootComponent }
  // { path: '**', component: RootComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rootRoutes);
