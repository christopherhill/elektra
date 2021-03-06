'use strict';

import { NgModule } from '@angular/core';
import { routing } from './root.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import { EntityComponent } from './../entity/entity.component';
import { RootComponent } from './root.component';
import { EntityModule } from './../entity/entity.module';
import { VideoModule } from './../video/video.module';
import { NavbarComponent } from './../navbar/navbar.component';
import { APIModule } from './../../shared/api/api.module';
import { SafeUrlPipe } from './../../shared/safe-url.pipe';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';

@NgModule({
    imports: [
      FormsModule,
      BrowserModule,
      EntityModule,
      VideoModule,
      APIModule,
      routing,
      DropdownModule.forRoot(),
      TypeaheadModule.forRoot()
    ],
    declarations: [
      RootComponent,
      NavbarComponent
    ],
    bootstrap: [RootComponent]
})

export class RootModule {};
