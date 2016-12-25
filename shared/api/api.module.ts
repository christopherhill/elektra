'use strict';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APIHttpService } from './api-http.service';

@NgModule({
    imports: [
      HttpModule
    ],
    providers: [
      APIHttpService
    ]
})

export class APIModule {};
