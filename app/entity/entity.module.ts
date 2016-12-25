'use strict';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './entity.routes';
import { EntityComponent } from './entity.component';

@NgModule({
    imports: [
      routing
    ],
    declarations: [
      EntityComponent
    ],
    bootstrap: [EntityComponent]
})

export class EntityModule {};
