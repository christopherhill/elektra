'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { VideoComponent } from './video.component';

export const videoRoutes: Routes = [
  { path: 'video', component: VideoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(videoRoutes);
