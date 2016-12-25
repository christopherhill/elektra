import { RootComponent } from './root.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { entityRoutes } from './../entity/entity.routes';
import { videoRoutes } from './../video/video.routes';

export const rootRoutes: Routes = [
  ...videoRoutes,
  ...entityRoutes,
  { path: '', component: RootComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rootRoutes);
