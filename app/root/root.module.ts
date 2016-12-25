'use strict';

import { NgModule } from '@angular/core';
import { routing } from './root.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import { EntityComponent } from './../entity/entity.component';
import { RootComponent } from './root.component';
import { EntityModule } from './../entity/entity.module';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      EntityModule,
      routing
    ],
    declarations: [
      RootComponent
    ],
    bootstrap: [RootComponent]
})

export class RootModule {};
