'use strict';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './video.routes';
import { VideoComponent } from './video.component';

@NgModule({
    imports: [
      routing
    ],
    declarations: [
      VideoComponent
    ],
    bootstrap: [VideoComponent]
})

export class VideoModule {};
