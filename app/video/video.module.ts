'use strict';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './video.routes';
import { VideoComponent } from './video.component';
import { YouTubeAPI } from './youtube.service';
import { YouTubeVideoComponent } from './youtube.component';
// why is it necessary to import BrowserModule again?
@NgModule({
    imports: [
      routing,
      BrowserModule
    ],
    declarations: [
      VideoComponent,
      YouTubeVideoComponent
    ],
    providers: [
      YouTubeAPI
    ],
    bootstrap: [VideoComponent]
})

export class VideoModule {};
