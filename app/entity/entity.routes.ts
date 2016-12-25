'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EntityComponent } from './entity.component';

export const entityRoutes: Routes = [
  { path: 'entity', component: EntityComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(entityRoutes);
